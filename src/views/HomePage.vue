<template>
  <AppLayout title="Dashboard">
    <div class="mt-5 lg:pl-0 pr-4 pl-4">
      <div class="w-full p-8 bg-base-200 rounded-xl grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2">
        <div>
          <div class="w-full hover:bg-primary/80 transition-all cursor-pointer bg-primary rounded-lg h-24 flex items-center justify-center">
            <h2 class="font-bold">New Server</h2>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>