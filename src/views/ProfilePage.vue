<template>
    <AppLayout title="Profile">
      <div class="mt-4">
        <div class="grid grid-cols-1 gap-4">
            <!-- make profile ui -->
            <div class="w-full p-8 bg-base-100 rounded-xl">
                <div class="flex items-center gap-4">
                    <div tabindex="0" role="button" class="avatar">
                        <div class="w-24 mask mask-squircle">
                            <img :src="user.photoURL" />
                        </div>
                    </div>
                    <div>
                        <h1 class="text-lg font-bold">{{ user.displayName }}</h1>
                        <p class="text-sm">
                            <span>{{ user.email }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </AppLayout>
</template>
  
  <script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user: any = JSON.parse(sessionStorage.getItem('user') || '{}')

</script>