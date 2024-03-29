<script setup>

</script>

<template>

    <div class="form-container" id="create-bus">
        <div class="form-body">
            <div class="login-container">
                <p class="login-text">Login here!</p>
                <div class="input-container">
                    <div class="input">
                        <label class="input-text">Email or Phone</label>
                        <input class="input-field" type="email">
                    </div>
                    <div class="input">
                        <label class="input-text">Password</label>
                        <input class="input-field" type="password">
                    </div>
                </div>
                <div class="btn-container">
                    <button class="login-btn">Create</button>
                </div>
                <router-link to="/signup" class="link">Create an account ?</router-link>
            </div>
        </div>
    </div>

</template>

<style scoped>

.form-container {
    width: 100%;
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-body {
    width: 500px;
    height: 400px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
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
    width: 430px;
    height: 50px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    border-radius: 6px;
    border: none;
    outline: none;
    color: #fff;
    background-color: rgb(134, 211, 66);
}

.login-btn:hover {
    background-color: #111;
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