<template>
    <ion-page> 
      <ion-content :fullscreen="true">
        <div ref="loading" class="fixed w-full h-full bg-base-300 top-0 left-0 flex items-center justify-center">
            <img src="/logo.png" ref="logo" class="animate__animated animate__fadeIn w-24 rounded-xl" alt="logo">
        </div>
        <div id="container" :class="{'hidden': isloading}" class="min-h-screen w-full bg-base-300 text-base-content flex items-center">
            <div class="fixed w-full flex p-3 justify-center top-0 left-0">
                <img src="/logo.png" class="w-12 rounded-xl" alt="logo">
            </div>            
            <div class="grid lg:grid-cols-3 gap-8 w-full grid-cols-1 px-8 items-center">
              <div class="lg:col-span-2">
                <img src="/wallpaper.jpg" class="w-full rounded-xl h-64 object-cover object-center" alt="">
              </div>
              <div>
                <h1 class="text-3xl font-bold">Just Play & Enjoy With <br> Your Partner</h1>
                <p class="text-sm mt-3 mb-6">Sign in with Google now and enjoy playing all the games <br> available in the Nodell app.</p>
                <button @click="loginGoogle()" class="btn bg-red-500 text-white">Start Now</button>
              </div>
            </div>
            <div class="fixed w-full flex p-3 justify-center bottom-0 left-0">
                <p class="text-xs text-gray-500">© 2024 Nodell. All rights reserved. Developed by <a class="text-primary" href="https://hayago.id">Ninno Hayago</a></p>
            </div>
        </div>
      </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue'
import { Ref, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '@/firebase'

const auth = getAuth(app.app)
const router = useRouter()
const isloading = ref(true)
const logo: Ref<HTMLElement|null> = ref(null)
const loading: Ref<HTMLElement|null> = ref(null)
const user: any = ref(null)

onMounted(() => {
  setTimeout(() => {
    logo.value?.classList.remove('animate__fadeIn')
    logo.value?.classList.add('animate__fadeOut')
  }, 1000)
  setTimeout(() => {
    isloading.value = false
    loading.value?.classList.add('animate__fadeOut', 'hidden')
    if(sessionStorage.getItem('user')) {
      user.value = JSON.parse(sessionStorage.getItem('user') || '{}')
      router.push('/home')
    }
  }, 2000)
})

async function loginGoogle() {
  try {
    const result = await signInWithPopup(auth, new GoogleAuthProvider())
    const credential = GoogleAuthProvider.credentialFromResult(result)
    const token = credential?.accessToken
    user.value = result.user
    if(token)
      sessionStorage.setItem('token', token?.toString())
    sessionStorage.setItem('user', JSON.stringify(user.value))
    router.push('/home')
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode, errorMessage, email, credential)
  }
}
</script>
