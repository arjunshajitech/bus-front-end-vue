<template>
    <div class="form-container" id="create-bus">
        <div class="form-body">

            <div class="route-header">
                <p class="route-header-text">Today's buses</p>
                <select id="myDropdown">
                    <option value="" disabled selected>Choose week day</option>
                    <option value="option1">MONDAY</option>
                    <option value="option2">TUESDAY</option>
                    <option value="option3">WEDNESDAY</option>
                    <option value="option1">THURSDAY</option>
                    <option value="option2">FRIDAY</option>
                    <option value="option3">SATURDAY</option>
                    <option value="option1">SUNDAY</option>
                </select>
            </div>

            <div class="route-container">

                <div class="bus-route">
                    <div class="location">
                        <p class="location-text">Muhamma, Alappuzha</p>
                        <p class="location-text"> - </p>
                        <p class="location-text">Alappuzha, Kerala</p>
                    </div>
                    <div class="timing">
                        <p class="timing-text">10 : 00 : 00</p>
                        <p class="timing-text"> - </p>
                        <p class="timing-text">11 : 00 : 00</p>
                    </div>
                    <div class="buttons">
                        <button class="btn">Routes</button>
                        <button class="btn">Current Location</button>
                    </div>
                </div>

                <div class="bus-route">
                    <div class="location">
                        <p class="location-text">Muhamma, Alappuzha</p>
                        <p class="location-text"> - </p>
                        <p class="location-text">Alappuzha, Kerala</p>
                    </div>
                    <div class="timing">
                        <p class="timing-text">10 : 00 : 00</p>
                        <p class="timing-text"> - </p>
                        <p class="timing-text">11 : 00 : 00</p>
                    </div>
                    <div class="buttons">
                        <button class="btn">Routes</button>
                        <button class="btn">Current Location</button>
                    </div>
                </div>

                <div class="bus-route">
                    <div class="location">
                        <p class="location-text">Muhamma, Alappuzha</p>
                        <p class="location-text"> - </p>
                        <p class="location-text">Alappuzha, Kerala</p>
                    </div>
                    <div class="timing">
                        <p class="timing-text">10 : 00 : 00</p>
                        <p class="timing-text"> - </p>
                        <p class="timing-text">11 : 00 : 00</p>
                    </div>
                    <div class="buttons">
                        <button class="btn">Routes</button>
                        <button class="btn">Current Location</button>
                    </div>
                </div>

                <div class="bus-route">
                    <div class="location">
                        <p class="location-text">Muhamma, Alappuzha</p>
                        <p class="location-text"> - </p>
                        <p class="location-text">Alappuzha, Kerala</p>
                    </div>
                    <div class="timing">
                        <p class="timing-text">10 : 00 : 00</p>
                        <p class="timing-text"> - </p>
                        <p class="timing-text">11 : 00 : 00</p>
                    </div>
                    <div class="buttons">
                        <button class="btn">Routes</button>
                        <button class="btn">Current Location</button>
                    </div>
                </div>
                <div class="bus-route">
                    <div class="location">
                        <p class="location-text">Muhamma, Alappuzha</p>
                        <p class="location-text"> - </p>
                        <p class="location-text">Alappuzha, Kerala</p>
                    </div>
                    <div class="timing">
                        <p class="timing-text">10 : 00 : 00</p>
                        <p class="timing-text"> - </p>
                        <p class="timing-text">11 : 00 : 00</p>
                    </div>
                    <div class="buttons">
                        <button class="btn">Routes</button>
                        <button class="btn">Current Location</button>
                    </div>
                </div>
                <div class="bus-route">
                    <div class="location">
                        <p class="location-text">Muhamma, Alappuzha</p>
                        <p class="location-text"> - </p>
                        <p class="location-text">Alappuzha, Kerala</p>
                    </div>
                    <div class="timing">
                        <p class="timing-text">10 : 00 : 00</p>
                        <p class="timing-text"> - </p>
                        <p class="timing-text">11 : 00 : 00</p>
                    </div>
                    <div class="buttons">
                        <button class="btn">Routes</button>
                        <button class="btn">Current Location</button>
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
    height: 400px;
    background-color: #fff;
    border-radius: 20px;
}

.route-header {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 50px;

}

.route-header-text {
    font-size: 20px;
    color: #111;
    font-style: italic;
    font-weight: bold;
}

select {
    width: 200px;
    height: 40px;
    outline: none;
    border: 3px solid rgb(134, 211, 66);
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

.route-container {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.route-container>* {
    flex: 0 0 calc(33.33% - 20px);
}

.bus-route {
    width: 430px;
    height: 150px;
    border-radius: 10px;
    background-color: rgb(134, 211, 66);
}

.location,
.timing,
.buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
}

.location-text {
    padding-top: 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
}

.timing-text {
    padding-top: 10px;
    font-size: 22px;
    font-weight: bold;
}

.btn {
    margin-top: 10px;
    width: 150px;
    height: 45px;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    border-radius: 6px;
    border: none;
    outline: none;
    color: #111;

}

.btn:hover {
    background-color: #111;
    color: #fff;
    transition: .5s;
}
</style>