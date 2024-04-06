<script setup>
import { ref, watch } from 'vue';
import constant from '../constant/Const'
import axios from 'axios';
import { useRouter } from 'vue-router';

axios.defaults.withCredentials = true;
const router = useRouter();

const busOwnerName = ref('');
const showLogout = ref(false);
let URL_PATH = document.URL;
let BUSOWNER_HOME_PATH = "http://localhost:5173/busowner/home";

const checkBusOwnerSession = () => {
    if (URL_PATH === BUSOWNER_HOME_PATH) {

        axios.get(constant.BUSOWNER_PROFILE).then((response) => {
            if (response.status === 200) {
                // todo : toast
                busOwnerName.value = response.data.firstName + " " + response.data.lastName;
                showLogout.value = true;
            } else {
                // todo : toast
                router.push('/busowner');
            }
        }).catch((error) => {
            // todo : toast
            router.push('/busowner');
            console.error(error);
        });
    }
}

const busownerLogout = () => {

    axios.get(constant.BUSOWNER_LOGOUT).then((response) => {
        if (response.status === 200) {
            // todo : toast
            router.push('/busowner');
        } else {
            // todo : toast
        }
    }).catch((error) => {
        // todo : toast
        console.error(error);
    });
}

checkBusOwnerSession();


</script>



<template>

    <div class="navbar-container">
        <div class="navbar">
            <div class="nav">
                <p class="nav-text">{{ busOwnerName }}</p>
                <p class="nav-text">Ente Bus App | Bus Owner Panel</p>
                <p class="nav-text" v-if="showLogout" @click="busownerLogout()">Logout</p>
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