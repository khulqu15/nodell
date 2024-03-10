<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content lg:pl-8 justify-center min-h-screen bg-base-300">
                    <div class="w-full bg-base-200 rounded-b-xl p-2 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                            <h1 class="pl-3 text-xl font-semibold">{{ title }}</h1>
                        </div>
                        <div>
                            <div class="dropdown dropdown-bottom dropdown-end">
                                <div tabindex="0" role="button" class="avatar">
                                    <div class="w-12 mask mask-squircle">
                                        <img :src="user.photoURL" />
                                    </div>
                                </div>
                                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a @click="$router.push({name: 'Profile'})">Profile</a></li>
                                    <li><a @click="onLogout()">Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <slot></slot>
                </div> 
                <div class="drawer-side">
                    <div class="w-full p-4 flex items-center gap-3 bg-base-200">
                        <img src="/logo.png" class="w-12 rounded-xl" alt="">
                        <h1 class="text-2xl font-bold">Nodell</h1>
                    </div>
                    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label> 
                    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <li><button @click="$router.replace({name: 'Home'})" :class="{'bg-primary text-white': $route.name == 'Home'}">Dashboard</button></li>
                        <!-- <li><button @click="$router.replace({name: 'Histories'})" :class="{'bg-primary text-white': $route.name == 'Histories'}">Histories</button></li> -->
                        <li><a>Request Game</a></li>
                    </ul>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue'
import { Ref, onMounted, ref } from 'vue'
export default {
    components: {
        IonContent,
        IonPage
    },
    props: {
        title: String
    },
    data() {
        return {
            user: JSON.parse(sessionStorage.getItem('user') || '{}')
        }
    },
    mounted() {
        if(sessionStorage.getItem('user') == null || sessionStorage.getItem('user') == undefined) {
            this.$router.replace('/')
            return
        }  
    },
    methods: {
        onLogout() {
            sessionStorage.removeItem('user')
            sessionStorage.removeItem('token')
            this.$router.replace('/')
        }
    }
}
</script>