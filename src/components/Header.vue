<script setup>
import { ref } from 'vue'


const getCurrentWeekDay = () => {
    var currentDate = new Date();
    var currentDayOfWeek = currentDate.getDay();
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[currentDayOfWeek];
}

var currentWeekDay = ref(getCurrentWeekDay());


</script>

<template>

    <div class="navbar-container">
        <div class="navbar">
            <div class="nav">
                <p class="nav-text">Arjun Shaji</p>
                <p class="nav-text">Ente Bus App | Welcome back on {{ currentWeekDay }}!</p>
                <p class="nav-text">Logout</p>
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