<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';
import constant from '../../constant/Const'
import { useRouter } from 'vue-router';
import toast from '../../toast/toast'
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';

axios.defaults.withCredentials = true;
const router = useRouter();

const { errors, defineField, validate } = useForm({
    validationSchema: toTypedSchema(
        yup.object({
            email: yup.string().email().required(),
            password: yup.string().min(6).required(),
        }),
    ),
});

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');

const emailInputBorderColor = ref('rgb(134, 211, 66)');
const passwordInputBorderColor = ref('rgb(134, 211, 66)');

watch(email, () => {
    if (typeof errors.value.email !== 'undefined') {
        emailInputBorderColor.value = 'rgb(211, 66, 66)';
    } else {
        emailInputBorderColor.value = 'rgb(134, 211, 66)';
    }
})

watch(password, () => {
    if (typeof errors.value.password !== 'undefined') {
        passwordInputBorderColor.value = 'rgb(211, 66, 66)';
    } else {
        passwordInputBorderColor.value = 'rgb(134, 211, 66)';
    }
})

const updateErrorBorderColor = () => {
    passwordInputBorderColor.value = 'rgb(211, 66, 66)';
    emailInputBorderColor.value = 'rgb(211, 66, 66)';
}


const adminLogin = async () => {

    const isLoginForm = await validate();
    if (isLoginForm.valid) {
        axios.post(constant.ADMIN_LOGIN_URL, {
            emailOrPhone: email.value,
            password: password.value
        }).then((response) => {
            if (response.status === 200) {
                toast.success('Login Success.')
                router.push('/admin/home');
            } else {
                toast.warning('Something went wrong')
            }

        }).catch((error) => {
            toast.error('Incorrect email or password.')
            router.push('/admin');
            console.error(error);
        });
    } else {
        toast.error('Invalid email or password')
        updateErrorBorderColor();
    }

}

const adminLogout = () => {
    axios.get(constant.ADMIN_LOGOUT).then((response) => {
    }).catch((error) => {
        console.error(error);
    });
}

adminLogout();


</script>

<template>

    <div class="form-container" id="create-bus">
        <div class="form-body">
            <div class="login-container">
                <p class="login-text">Admin Login</p>
                <div class="input-container">
                    <div class="input">
                        <label class="input-text" :style="{ color: emailInputBorderColor }">Email</label>
                        <input class="input-field" type="text" v-model="email" v-bind="emailAttrs"
                            :style="{ borderColor: emailInputBorderColor }" />
                    </div>
                    <div class="input">
                        <label class="input-text" :style="{ color: passwordInputBorderColor }">Password</label>
                        <input :style="{ borderColor: passwordInputBorderColor }" class="input-field" v-model="password"
                            v-bind="passwordAttrs" type="password">
                    </div>
                </div>
                <div class="btn-container">
                    <button class="login-btn" @click="adminLogin()">Continue</button>
                </div>
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
    height: 350px;
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
    border: 1px solid;
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