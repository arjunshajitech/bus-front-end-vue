<template>
    <div class="form-container" id="create-bus">
        <div class="form-body">
            <div class="login-container">
               
                <div class="input-container">
                    <div class="input">
                        <label class="input-text">Start Location</label>
                        <input class="input-field" placeholder="Muhamma, Alappuzha, Mannamcherry ...." type="text">
                    </div>
                    <div class="input">
                        <label class="input-text">End Location</label>
                        <input class="input-field" placeholder="Muhamma, Alappuzha, Mannamcherry ...." type="text">
                    </div>
                    <div class="btn-container">
                        <button class="login-btn">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.input-field::placeholder {
    font-size: 15px;
}

.form-container {
    width: 100%;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-body {
    width: 90%;
    height: 130px;
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
    column-gap: 10px;
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