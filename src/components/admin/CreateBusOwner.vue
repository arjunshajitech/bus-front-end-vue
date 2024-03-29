<script setup>
import { ref } from 'vue'
const ListBusOwner = ref(true);
const listBgColor = ref('rgb(134, 211, 66)')
const createBgColor = ref('');


const switchBody = (val) => {
    if (val === 'list') {
        ListBusOwner.value = true;
        createBgColor.value = '';
        listBgColor.value = 'rgb(134, 211, 66)';
    } else {
        ListBusOwner.value = false;
        listBgColor.value = '';
        createBgColor.value = 'rgb(134, 211, 66)';
    }
}

</script>

<template>

    <div class="nav-container">
        <div class="nav">
            <button :style="{ backgroundColor: listBgColor }" @click="switchBody('list')" class="login-btn btn">List Bus
                Owners</button>
            <button :style="{ backgroundColor: createBgColor }" @click="switchBody('create')" class="login-btn btn">Create Bus Owner</button>
        </div>
    </div>

    <div v-if="ListBusOwner" class="form-container" id="create-bus">
        <div class="list-body">
            <div class="list-container">
                <table>
                    <thead>
                        <tr>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                            <!-- <th>EDIT</th> -->
                            <th>PASSWORD</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Arjun</td>
                            <td>Shaji</td>
                            <td>arjun@gmail.com</td>
                            <td>7788778877</td>
                            <td>************</td>
                            <!-- <td><button class="edit-btn">Edit</button></td> -->
                            <td><button class="delete-btn">Delete</button></td>
                        </tr>
                        <tr>
                            <td>Arjun</td>
                            <td>Shaji</td>
                            <td>arjun@gmail.com</td>
                            <td>7788778877</td>
                            <td>************</td>
                            <!-- <td><button class="edit-btn">Edit</button></td> -->
                            <td><button class="delete-btn">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div v-else class="form-container" id="create-bus">
        <div class="form-body">
            <div class="login-container">
                <p class="login-text">Create Bus Owner</p>
                <div class="input-container">
                    <div class="input-box">
                        <div class="input">
                            <label class="input-text">First name</label>
                            <input class="input-field" type="text">
                        </div>
                        <div class="input">
                            <label class="input-text">Last name</label>
                            <input class="input-field" type="text">
                        </div>
                    </div>
                    <div class="input-box">
                        <div class="input">
                            <label class="input-text">Phone</label>
                            <input class="input-field" type="text">
                        </div>
                        <div class="input">
                            <label class="input-text">Email</label>
                            <input class="input-field" type="email">
                        </div>
                    </div>
                    <div class="input-box">
                        <div class="input">
                            <label class="input-text">Password</label>
                            <input class="input-field" type="password">
                        </div>
                        <div class="btn-container">
                            <button class="login-btn">Create</button>
                        </div>
                    </div>
                </div>
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
    height: 470px;
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
    width: 420px;
    height: 50px;
    cursor: pointer;
    font-size: 20px;
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
</style>