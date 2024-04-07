<script setup>
import { ref, watch } from 'vue';
import constant from '../constant/Const'
import toast from '../toast/toast'
import axios from 'axios';
import { useRouter } from 'vue-router';

axios.defaults.withCredentials = true;
const router = useRouter();

const adminName = ref('');
const showLogout = ref(false);
let URL_PATH = document.URL;
let ADMIN_HOME_PATH = "http://localhost:5173/admin/home";

const checkAdminSession = () => {
    if (URL_PATH === ADMIN_HOME_PATH) {

        axios.get(constant.ADMIN_PROFILE).then((response) => {
            if (response.status === 200) {
                adminName.value = response.data.firstName + " " + response.data.lastName;
                showLogout.value = true;
            } else {
                router.push('/admin');
            }
        }).catch((error) => {
            router.push('/admin');
            console.error(error);
        });
    }
}

const adminLogout = () => {
    axios.get(constant.ADMIN_LOGOUT).then((response) => {
        if (response.status === 200) {
            toast.success('Logout Success.')
            router.push('/admin');
        } 
    }).catch((error) => {
        toast.warning('Something went wrong')
        console.error(error);
    });
}

checkAdminSession();

</script>




<template>

    <div class="navbar-container">
        <div class="navbar">
            <div class="nav">
                <p class="nav-text">{{ adminName }}</p>
                <p class="nav-text">Travel Trace | Admin Panel</p>
                <p class="nav-text" @click="adminLogout" v-if="showLogout">Logout</p>
            </div>
        </div>
    </div>

</template>

<style scoped>
.navbar {
    width: 100%;
    height: 100px;
    background-color: rgb(134, 211, 66);
}

.nav {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 100px;
    height: 100px;
}

.nav-text {
    font-style: italic;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
    color: #111;
}

.nav-text:hover {
    color: #fff;
    transition: .8s;
}
</style>