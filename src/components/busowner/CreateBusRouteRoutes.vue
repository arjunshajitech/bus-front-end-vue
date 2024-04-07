<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';
import constant from '../../constant/Const'
import { useRouter } from 'vue-router';
import toast from '../../toast/toast'
import { useForm } from 'vee-validate';
import * as yup from 'yup';

axios.defaults.withCredentials = true;
const router = useRouter();

const { errors, defineField, validate } = useForm({
    validationSchema: yup.object({
        busName: yup.string().min(4).required(),
        registrationNumber: yup.string().min(6).required(),
    }),
    validationSchema: yup.object({
        startLocation: yup.string().required(),
        endLocation: yup.string().required(),
        startTime: yup.string().required(),
        endTime: yup.string().required(),
        weekDay: yup.string().required(),
        busId: yup.string().required(),
    })
});


const [busName, busNameAttrs] = defineField('busName');
const [registrationNumber, registrationNumberAttrs] = defineField('registrationNumber');
const [startLocation, startLocationAttrs] = defineField('startLocation');
const [endLocation, endLocationAttrs] = defineField('endLocation');
const [busId, busIdAttrs] = defineField('busId');
const [weekDay, weekDayAttrs] = defineField('weekDay');
const [startTime, startTimeAttrs] = defineField('startTime');
const [endTime, endTimeAttrs] = defineField('endTime');

const busNameFieldBorderColor = ref('rgb(134, 211, 66)');
const registrationNumberFieldBorderColor = ref('rgb(134, 211, 66)');
const startLocationFieldBorderColor = ref('rgb(134, 211, 66)');
const endLocationFieldBorderColor = ref('rgb(134, 211, 66)');
const startTimeFieldBorderColor = ref('rgb(134, 211, 66)');
const endTimeFieldBorderColor = ref('rgb(134, 211, 66)');
const busIdFieldBorderColor = ref('rgb(134, 211, 66)');
const weekDayFieldBorderColor = ref('rgb(134, 211, 66)');

let error = ref(errors);
watch(error, () => {
    changeInputBorderColor(errors.value.busName, busNameFieldBorderColor);
    changeInputBorderColor(errors.value.registrationNumber, registrationNumberFieldBorderColor);
    changeInputBorderColor(errors.value.startLocation, startLocationFieldBorderColor);
    changeInputBorderColor(errors.value.endLocation, registrationNumberFieldBorderColor);
    changeInputBorderColor(errors.value.busId, busIdFieldBorderColor);
    changeInputBorderColor(errors.value.weekDay, weekDayFieldBorderColor);
    changeInputBorderColor(errors.value.startTime, startTimeFieldBorderColor);
    changeInputBorderColor(errors.value.endTime, endTimeFieldBorderColor);
})

const changeInputBorderColor = (value, variable) => {
    if (typeof value !== 'undefined') {
        variable.value = 'rgb(211, 66, 66)';
    } else {
        variable.value = 'rgb(134, 211, 66)';
    }
}


const currentDisplay = ref('buses');

const bgCreateBus = ref('rgb(134, 211, 66)');
const bgCreateRoute = ref('');
const bgCreateSubRoute = ref('');
const bgListBus = ref('');
const bgListRoute = ref('');
const bgListSubRoute = ref('');

const daysOfWeek = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']
const timeOptions = ref([]);
const locations = ref([]);
const startLocationDropDown = ref(false);
const endLocationDropDown = ref(false);
const busDetails = ref([]);
const routeDetals = ref([]);




const switchBody = (val) => {
    bgCreateBus.value = '';
    bgCreateRoute.value = '';
    bgCreateSubRoute.value = '';
    bgListBus.value = '';
    bgListRoute.value = '';
    bgListSubRoute.value = '';
    switch (val) {
        case 'buses':
            bgCreateBus.value = 'rgb(134, 211, 66)';
            getAllBuses();
            break;
        case 'routes':
            bgCreateRoute.value = 'rgb(134, 211, 66)';
            getAllRoutes();
            break;
        case 'sub_routes':
            bgCreateSubRoute.value = 'rgb(134, 211, 66)';
            currentDisplay.value = 'sub_routes';
            break;
        case 'create_bus':
            bgListBus.value = 'rgb(134, 211, 66)';
            currentDisplay.value = 'create_bus';
            break;
        case 'create_route':
            bgListRoute.value = 'rgb(134, 211, 66)';
            currentDisplay.value = 'create_route';
            break;
        case 'create_sub_route':
            bgListSubRoute.value = 'rgb(134, 211, 66)';
            currentDisplay.value = 'create_sub_route';
            break;
        default:
            break;
    }
}

const handleChange = (status) => {
    const emptyLocation = ["No Location found."]
    if (status === 'startLocation') {
        startLocationDropDown.value = true
        const places = constant.LOCATIONS.filter(location => location.toLowerCase().includes(startLocation.value.toLowerCase()));
        if (places.length > 0 && startLocation.value != '') locations.value = places
        else locations.value = emptyLocation;
    } else {
        endLocationDropDown.value = true
        const places = constant.LOCATIONS.filter(location => location.toLowerCase().includes(endLocation.value.toLowerCase()));
        if (places.length > 0 && endLocation.value != '') locations.value = places
        else locations.value = emptyLocation;
    }
}

const updateStartLocationValue = (value) => {
    startLocationDropDown.value = false;
    startLocation.value = value;
}

const updateEndLocationValue = (value) => {
    endLocationDropDown.value = false;
    endLocation.value = value;
}

const getAllBuses = () => {
    axios.get(constant.BUSOWNER_LIST_BUS).then((response) => {
        if (response.status === 200) {
            if (response.data.length > 0) {
                currentDisplay.value = 'buses';
                busDetails.value = response.data;
            } else {
                currentDisplay.value = 'no_data_found';
            }
        }
    }).catch((error) => {
        console.error(error);
    });
}
getAllBuses();

const getAllRoutes = () => {
    axios.get(constant.BUSOWNER_LIST_ROUTE).then((response) => {
        if (response.status === 200) {
            if (response.data.length > 0) {
                currentDisplay.value = 'routes';
                routeDetals.value = response.data;
            } else {
                currentDisplay.value = 'no_data_found';
            }
        }
    }).catch((error) => {
        console.error(error);
    });
}


const createBus = async () => {
    const isValidForm = await validate();
    if (isValidForm.valid) {
        axios.post(constant.BUSOWNER_CREATE_BUS, {
            busName: busName.value,
            registrationNumber: registrationNumber.value
        }).then((response) => {
            if (response.status === 200) {
                toast.success("Bus created.")
                switchBody('buses');
                getAllBuses();
            } else {
                toast.warning('Something went wrong')
            }
        }).catch((error) => {
            toast.error('Bus already exists.')
            console.error(error);
        });
    } else {
        toast.error('Fill the fields.')
    }
}

const deleteBus = (id) => {
    const confirmation = confirm('Are you sure you want to delete bus?');
    if (confirmation) {
        axios.delete(constant.BUSOWNER_DELETE_BUS + "/" + id).then((response) => {
            if (response.status === 200) {
                toast.success("Bus deleted.")
                getAllBuses();
            } else {
                toast.warning('Something went wrong')
            }
        }).catch((error) => {
            toast.warning('Something went wrong')
            console.error(error);
        });
    }
}

const createRoutes = async () => {

    const isValidForm = await routeValidate();
    if (isValidForm.valid) {
        axios.post(constant.BUSOWNER_CREATE_ROUTE, {
            busId: busId.value,
            startLocation: startLocation.value,
            endLocation: endLocation.value,
            startTime: startTime.value,
            endTime: endTime.value,
            day: weekDay.value
        }).then((response) => {
            if (response.status === 200) {
                toast.success("Route created.")
                switchBody('routes');
                getAllRoutes();
            } else {
                toast.warning('Something went wrong')
            }
        }).catch((error) => {
            toast.error('Route already exists.')
            console.error(error);
        });
    } else {
        toast.error('Fill the fields.')
    }


}

const deleteRoute = (id) => {
    const confirmation = confirm('Are you sure you want to delete route?');
    if (confirmation) {
        axios.delete(constant.BUSOWNER_DELETE_ROUTE + "/" + id).then((response) => {
            if (response.status === 200) {
                toast.success("Route deleted.")
                getAllRoutes();
            } else {
                toast.warning('Something went wrong')
            }
        }).catch((error) => {
            toast.warning('Something went wrong')
            console.error(error);
        });
    }
}

for (let hour = 0; hour <= 23; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
        const time = new Date();
        time.setHours(hour);
        time.setMinutes(minute);
        time.setSeconds(0);
        const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const ampm = time.getHours() >= 12 ? 'PM' : 'AM';
        const formattedValue = `${formattedTime}:${time.getSeconds() < 10 ? '0' : ''}${time.getSeconds()}`;
        const timeObject = {
            displayTime: `${formattedTime} ${ampm}`,
            value: formattedValue
        };
        timeOptions.value.push(timeObject);
    }
}


</script>

<template>

    <div class="nav-container">
        <div class="nav">
            <button :style="{ backgroundColor: bgCreateBus }" @click="switchBody('buses')"
                class="login-btn btn">Buses</button>
            <button :style="{ backgroundColor: bgCreateRoute }" @click="switchBody('routes')"
                class="login-btn btn">Routes</button>
            <button :style="{ backgroundColor: bgCreateSubRoute }" @click="switchBody('sub_routes')"
                class="login-btn btn">Sub Routes</button>
            <button :style="{ backgroundColor: bgListBus }" @click="switchBody('create_bus')"
                class="login-btn btn">Create
                Bus</button>
            <button :style="{ backgroundColor: bgListRoute }" @click="switchBody('create_route')"
                class="login-btn btn">Create Routes</button>
            <button :style="{ backgroundColor: bgListSubRoute }" @click="switchBody('create_sub_route')"
                class="login-btn btn">Create Sub Routes</button>
        </div>
    </div>



    <div v-if="currentDisplay === 'create_bus'" class="form-container" id="create-bus">
        <div class="form-body">
            <div class="login-container">
                <p class="login-text">Create Bus</p>
                <div class="input-container">

                    <div class="input">
                        <label :style="{ color: busNameFieldBorderColor }" class="input-text">Bus name</label>
                        <input v-model="busName" v-bind="busNameAttrs" :style="{ borderColor: busNameFieldBorderColor }"
                            class="input-field" type="text">
                    </div>
                    <div class="input">
                        <label :style="{ color: registrationNumberFieldBorderColor }" class="input-text">Registration
                            number</label>
                        <input v-model="registrationNumber" v-bind="registrationNumberAttrs"
                            :style="{ borderColor: registrationNumberFieldBorderColor }" class="input-field"
                            type="text">
                    </div>
                    <div class="btn-container">
                        <button @click="createBus()" class="login-btn">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else-if="currentDisplay === 'create_route'" class="form-container" id="create-bus">
        <div class="form-body">
            <div class="login-container">
                <p class="login-text">Create Route</p>
                <div class="input-container">
                    <select :style="{ borderColor: busIdFieldBorderColor }" v-model="busId" v-bind="busIdAttrs"
                        id="myDropdown">
                        <option value="" disabled selected>Choose bus</option>
                        <option v-for="bus in busDetails" :value="bus.id">{{ bus.busName }}</option>
                    </select>
                    <select :style="{ borderColor: weekDayFieldBorderColor }" v-model="weekDay" v-bind="weekDayAttrs"
                        id="myDropdown">
                        <option value="" disabled selected>Choose day</option>
                        <option v-for="day in daysOfWeek" :value="day">{{ day }}</option>
                    </select>
                    <div class="input">
                        <label :style="{ color: startLocationFieldBorderColor }" class="input-text">Start
                            location</label>
                        <input :style="{ borderColor: startLocationFieldBorderColor }" class="input-field" type="text"
                            @input="handleChange('startLocation')" v-model="startLocation" v-bind="startLocationAttrs">
                        <ul v-if="startLocationDropDown" class="dropdown">
                            <li v-for="location in locations" @click="updateStartLocationValue(location)">{{ location }}
                            </li>
                        </ul>
                    </div>
                    <div class="input">
                        <label :style="{ color: endLocationFieldBorderColor }" class="input-text">End location</label>
                        <input :style="{ borderColor: endLocationFieldBorderColor }" class="input-field" type="text"
                            @input="handleChange('endLocation')" v-model="endLocation" v-bind="endLocationAttrs">
                        <ul v-if="endLocationDropDown" class="dropdown">
                            <li v-for="location in locations" @click="updateEndLocationValue(location)">{{ location }}
                            </li>
                        </ul>
                    </div>
                    <select :style="{ borderColor: startTimeFieldBorderColor }" v-model="startTime"
                        v-bind="startTimeAttrs" id="myDropdown">
                        <option value="" disabled selected>Start Time</option>
                        <option v-for="time in timeOptions" :value="time.value">{{ time.displayTime }}</option>
                    </select>
                    <select :style="{ borderColor: endTimeFieldBorderColor }" v-model="endTime" v-bind="endTimeAttrs"
                        id="myDropdown">
                        <option value="" disabled selected>End Time</option>
                        <option v-for="time in timeOptions" :value="time.value">{{ time.displayTime }}</option>
                    </select>
                    <div class="btn-container">
                        <button @click="createRoutes()" class="login-btn">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else-if="currentDisplay === 'create_sub_route'" class="form-container" id="create-bus">
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

    <div v-else-if="currentDisplay === 'buses'" class="form-container" id="create-bus">
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
                    <tbody v-for="bus in busDetails">
                        <tr>
                            <td>{{ bus.busName }}</td>
                            <td>{{ bus.registrationNumber }}</td>
                            <td><button @click="deleteBus(bus.id)" class="delete-btn">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div v-else-if="currentDisplay === 'routes'" class="form-container" id="create-bus">
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
                    <tbody v-for="route in routeDetals">
                        <tr>
                            <td>{{ route.busName }}</td>
                            <td>{{ route.startLocation }}</td>
                            <td>{{ route.endLocation }}</td>
                            <td>{{ route.startTime }}</td>
                            <td>{{ route.endTime }}</td>
                            <td><button @click="deleteRoute(route.id)" class="delete-btn">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div v-else-if="currentDisplay == 'sub_routes'" class="form-container" id="create-bus">
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

    <div v-else class="form-container" id="create-bus">
        <div class="list-body">
            <div class="list-container">
                <p class="empty-text">No Details found!</p>
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
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.dropdown {
    list-style-type: none;
    padding: 0;
    margin: 0;
    border: 1px solid #ccc;
    border-top: none;
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 1;
    max-height: 200px;
    overflow-y: auto;
}

.dropdown li {
    padding: 5px;
    cursor: pointer;
}

.dropdown li:hover {
    background-color: #f0f0f0;
}



.empty-text {
    font-size: 40px;
    padding-top: 200px;
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
    height: 570px;
    background-color: #fff;
    border-radius: 5px;
}

.form-body {
    width: 90%;
    height: 570px;
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
    font-size: 18px;
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
    overflow-y: auto;
}

option {
    font-size: 15px;
    font-weight: bold;
    padding-left: 10px;
}
</style>