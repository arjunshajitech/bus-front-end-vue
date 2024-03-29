<script setup>
import { ref } from 'vue'

const currentDisplay = ref('bus')
const bgCreateBus = ref('rgb(134, 211, 66)');
const bgCreateRoute = ref('');
const bgCreateSubRoute = ref('');
const bgListBus = ref('');
const bgListRoute = ref('');
const bgListSubRoute = ref('');



const switchBody = (val) => {
    if (val === 'bus') {
        bgCreateBus.value = 'rgb(134, 211, 66)';
        bgCreateRoute.value = '';
        bgCreateSubRoute.value = '';
        bgListBus.value = '';
        bgListRoute.value = '';
        bgListSubRoute.value = '';
        currentDisplay.value = 'bus'
    } else if (val === 'route') {
        bgCreateBus.value = '';
        bgCreateRoute.value = 'rgb(134, 211, 66)';
        bgCreateSubRoute.value = '';
        bgListBus.value = '';
        bgListRoute.value = '';
        bgListSubRoute.value = '';
        currentDisplay.value = 'route'
    } else if (val === 'sub-route') {
        bgCreateBus.value = '';
        bgCreateRoute.value = '';
        bgCreateSubRoute.value = 'rgb(134, 211, 66)';
        bgListBus.value = '';
        bgListRoute.value = '';
        bgListSubRoute.value = '';
        currentDisplay.value = 'sub-route'
    } else if (val === 'list-bus') {
        bgCreateBus.value = '';
        bgCreateRoute.value = '';
        bgCreateSubRoute.value = '';
        bgListBus.value = 'rgb(134, 211, 66)';
        bgListRoute.value = '';
        bgListSubRoute.value = '';
        currentDisplay.value = 'list-bus'
    } else if (val === 'list-route') {
        bgCreateBus.value = '';
        bgCreateRoute.value = '';
        bgCreateSubRoute.value = '';
        bgListBus.value = '';
        bgListRoute.value = 'rgb(134, 211, 66)';
        bgListSubRoute.value = '';
        currentDisplay.value = 'list-route'
    } else if (val === 'list-sub-route') {
        bgCreateBus.value = '';
        bgCreateRoute.value = '';
        bgCreateSubRoute.value = '';
        bgListBus.value = '';
        bgListRoute.value = '';
        bgListSubRoute.value = 'rgb(134, 211, 66)';
        currentDisplay.value = 'list-sub-route'
    }
}

</script>

<template>

    <div class="nav-container">
        <div class="nav">
            <button :style="{ backgroundColor: bgCreateBus }" @click="switchBody('bus')" class="login-btn btn">Create
                Bus</button>
            <button :style="{ backgroundColor: bgCreateRoute }" @click="switchBody('route')"
                class="login-btn btn">Create Bus Route</button>
            <button :style="{ backgroundColor: bgCreateSubRoute }" @click="switchBody('sub-route')"
                class="login-btn btn">Create Bus Sub Routes</button>
            <button :style="{ backgroundColor: bgListBus }" @click="switchBody('list-bus')" class="login-btn btn">List
                Bus</button>
            <button :style="{ backgroundColor: bgListRoute }" @click="switchBody('list-route')"
                class="login-btn btn">List Routes</button>
            <button :style="{ backgroundColor: bgListSubRoute }" @click="switchBody('list-sub-route')"
                class="login-btn btn">List Sub Routes</button>
        </div>
    </div>



    <div v-if="currentDisplay === 'bus'" class="form-container" id="create-bus">
        <div class="form-body">
            <div class="login-container">
                <p class="login-text">Create Bus</p>
                <div class="input-container">

                    <div class="input">
                        <label class="input-text">Bus name</label>
                        <input class="input-field" type="text">
                    </div>
                    <div class="input">
                        <label class="input-text">Registration number</label>
                        <input class="input-field" type="text">
                    </div>
                    <div class="btn-container">
                        <button class="login-btn">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div  v-else-if="currentDisplay === 'route'" class="form-container" id="create-bus">
        <div class="form-body">
            <div class="login-container">
                <p class="login-text">Create Route</p>
                <div class="input-container">
                    <select id="myDropdown">
                        <option value="" disabled selected>Choose bus</option>
                        <option value="option1">MONDAY</option>
                        <option value="option2">TUESDAY</option>
                        <option value="option3">WEDNESDAY</option>
                        <option value="option1">THURSDAY</option>
                        <option value="option2">FRIDAY</option>
                        <option value="option3">SATURDAY</option>
                        <option value="option1">SUNDAY</option>
                    </select>
                    <div class="input">
                        <label class="input-text">Start location</label>
                        <input class="input-field" type="text">
                    </div>
                    <div class="input">
                        <label class="input-text">End location</label>
                        <input class="input-field" type="text">
                    </div>
                    <div class="input">
                        <label class="input-text">Start time</label>
                        <input class="input-field" type="text">
                    </div>
                    <div class="input">
                        <label class="input-text">End Time</label>
                        <input class="input-field" type="text">
                    </div>
                    <div class="btn-container">
                        <button class="login-btn">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else-if="currentDisplay === 'sub-route'" class="form-container" id="create-bus">
        <div class="form-body">
            <div class="login-container">
                <p class="login-text">Create Sub Routes</p>
                <div class="input-container">
                    <select id="myDropdown">
                        <option value="" disabled selected>Choose bus</option>
                        <option value="option1">MONDAY</option>
                        <option value="option2">TUESDAY</option>
                        <option value="option3">WEDNESDAY</option>
                        <option value="option1">THURSDAY</option>
                        <option value="option2">FRIDAY</option>
                        <option value="option3">SATURDAY</option>
                        <option value="option1">SUNDAY</option>
                    </select>
                    <select id="myDropdown">
                        <option value="" disabled selected>Choose Route</option>
                        <option value="option1">MONDAY</option>
                        <option value="option2">TUESDAY</option>
                        <option value="option3">WEDNESDAY</option>
                        <option value="option1">THURSDAY</option>
                        <option value="option2">FRIDAY</option>
                        <option value="option3">SATURDAY</option>
                        <option value="option1">SUNDAY</option>
                    </select>
                    <div class="input">
                        <label class="input-text">Location name</label>
                        <input class="input-field" type="text">
                    </div>
                    <div class="input">
                        <label class="input-text">Location Time</label>
                        <input class="input-field" type="text">
                    </div>
                    <div class="btn-container">
                        <button class="login-btn">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else-if="currentDisplay === 'list-bus'" class="form-container" id="create-bus">
        <div class="list-body">
            <div class="list-container">
                <table>
                    <thead>
                        <tr>
                            <th>BUS NAME</th>
                            <th>REGISTRATION NUMBER</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Arjun</td>
                            <td>7788778877</td>
                            <td><button class="delete-btn">Delete</button></td>
                        </tr>
                        <tr>
                            <td>Arjun</td>
                            <td>7788778877</td>
                            <td><button class="delete-btn">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div v-else-if="currentDisplay === 'list-route'" class="form-container" id="create-bus">
        <div class="list-body">
            <div class="list-container">
                <table>
                    <thead>
                        <tr>
                            <th>BUS NAME</th>
                            <th>START LOCATION</th>
                            <th>END LOCATION</th>
                            <th>START TIME</th>
                            <th>END END TIME</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Arjun</td>
                            <td>7788778877</td>
                            <td>Arjun</td>
                            <td>7788778877</td>
                            <td>7788778877</td>
                            <td><button class="delete-btn">Delete</button></td>
                        </tr>
                        <tr>
                            <td>Arjun</td>
                            <td>7788778877</td>
                            <td>Arjun</td>
                            <td>7788778877</td>
                            <td>7788778877</td>
                            <td><button class="delete-btn">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div v-else class="form-container" id="create-bus">
        <div class="list-body">
            <div class="list-container">
                <table>
                    <thead>
                        <tr>
                            <th>BUS NAME</th>
                            <th>ROUTE</th>
                            <th>LOCATION NAME</th>
                            <th>LOCATION TIME</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Arjun</td>
                            <td>7788778877</td>
                            <td>Arjun</td>
                            <td>7788778877</td>
                            <td><button class="delete-btn">Delete</button></td>
                        </tr>
                        <tr>
                            <td>Arjun</td>
                            <td>7788778877</td>
                            <td>Arjun</td>
                            <td>7788778877</td>
                            <td><button class="delete-btn">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>

<style scoped>
th {
    font-size: 15px;
    padding: 0px 60px 0px 60px;
}

td {
    padding: 20px 60px 10px 60px;
}

.list-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
}

.input-box {
    display: flex;
    column-gap: 20px;
}

.nav {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
}

.form-container {
    width: 100%;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.list-body {
    width: 90%;
    height: 470px;
    background-color: #fff;
    border-radius: 5px;
}

.form-body {
    width: 90%;
    height: 500px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
}

.login-container {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    row-gap: 25px;
}

.login-text {
    color: #111;
    font-size: 30px;
    font-weight: bold;
}

.login-btn {
    width: 220px;
    height: 50px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    border-radius: 6px;
    border: none;
    outline: none;
    color: #fff;
    background-color: #111;
}

.edit-btn {
    width: 100px;
    height: 40px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    border-radius: 6px;
    border: none;
    outline: none;
    color: #fff;
    background-color: #111;
}

.delete-btn {
    width: 100px;
    height: 40px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    border-radius: 6px;
    border: none;
    outline: none;
    color: #fff;
    background-color: #111;
}

.edit-btn:hover {
    background-color: #1a6bd5;
    transition: .5s;
}

.delete-btn:hover {
    background-color: #d51a1a;
    transition: .5s;
}

.btn {
    border: 1px solid rgb(134, 211, 66);
}

.login-btn:hover {
    background-color: rgb(134, 211, 66);
    color: #fff;
    transition: .5s;
}

.input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 20px;
}

.input-field {
    width: 400px;
    height: 50px;
    border: 1px solid rgb(134, 211, 66);
    outline: none;
    border-radius: 6px;
    padding-left: 20px;
    font-size: 20px;
}

.input {
    position: relative;
}

.input-text {
    position: absolute;
    color: #111;
    background-color: #fff;
    font-size: 14px;
    top: -8px;
    left: 20px;
    font-weight: bold;
    padding: 0px 10px 0px 10px;
}

.link {
    color: #111;
    padding-bottom: 5px;
}

.link:hover {
    color: rgb(134, 211, 66);
}


select {
    width: 420px;
    height: 50px;
    outline: none;
    border: 1px solid rgb(134, 211, 66);
    border-radius: 6px;
    font-size: 15px;
    font-weight: bold;
    padding-left: 10px;
}

option {
    font-size: 15px;
    font-weight: bold;
    padding-left: 10px;
}
</style>