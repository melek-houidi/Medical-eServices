<template>
    <div >
        <b-dropdown id="dropdown-1" text="Location" class="m-md-2">
            <b-dropdown-item @click="test" value="tunis">tunis</b-dropdown-item>
            <b-dropdown-item @click="test" value="ariana">ariana</b-dropdown-item>
            <b-dropdown-item @click="test" value="ben arous">ben arous</b-dropdown-item>
            <b-dropdown-item @click="test" value="manouba">manouba</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
        </b-dropdown>
        <b-dropdown id="dropdown-1" text="Speciality" class="m-md-2">
            <b-dropdown-item @click="test" value="heart diseases">heart diseases</b-dropdown-item>
            <b-dropdown-item @click="test" value="diabetes">diabetes</b-dropdown-item>
            <b-dropdown-item @click="test" value="depression">depression</b-dropdown-item>
            <b-dropdown-item @click="test" value="nutrition">nutrition</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
        </b-dropdown>
        <b-container class="bv-example-row">
            <b-row class="justify-content-md-center">
                <b-col cols="12" md="auto">
                    <!-- <h4>Here is the Doctor Component</h4> -->
                    <div v-for="doctor in doctors" :key="doctor._id" class="mt-4">
                        <b-card v-bind:img-src="require('../.././assets/clinic.png')" img-alt="Card image" img-right class="mb-3">
                            <b-card-text>
                                <b>Name : </b>{{doctor.name}}
                            </b-card-text>
                            <b-card-text>
                                <b>Specialty : </b>{{doctor.specialty}}
                            </b-card-text>
                            <b-card-text>
                                <b>Phone Number : </b>{{doctor.phoneNumber}}
                            </b-card-text>
                            <b-card-text>
                                <b>email : </b>{{doctor.email}}
                            </b-card-text>
                            <b-card-text>
                                <b>Adress : </b>{{doctor.adress}}
                            </b-card-text>
                            <b-card-text>
                                <b>Disponibility : </b>{{doctor.disponibility}}
                            </b-card-text>
                        </b-card>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <router-view/>
    </div>
    
</template>

<script>
import axios from "axios"

export default {
    name: 'UserDoctor',
    data () {
        return {
            doctors: null,
            index: 0,
            fetched:false
        }
    },
    methods: {
        async test(e){
            this.$vs.loading({type:'radius'})
            this.fetched=false
            var doctors = await axios.post('http://localhost:3000/api/doctors/findDoctor',{adress:e.target.innerText})
            this.doctors = doctors.data
            setTimeout(()=>{
                this.fetched=true
                this.$vs.loading.close()
            },1000)
        }
    },
    async mounted() {
        this.$vs.loading({type:'radius'})
        var doctors = await axios.get('http://localhost:3000/api/doctors')
            this.doctors = doctors.data
        setTimeout(()=>{
            this.fetched=true
    this.$vs.loading.close()
        },2000)
    }
}
</script>

<style>

</style>