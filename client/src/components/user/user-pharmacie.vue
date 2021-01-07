<template>
    <div v-if="fetched">
        <!-- <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">Medical Services</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

            <b-navbar-nav>
                <router-link to='/pharmacie'>Pharmacies</router-link>
                <router-link to='/hospital'>Hospitals</router-link>
                <router-link to='/doctor'>Doctors</router-link>
            </b-navbar-nav> -->
            

            <!-- <b-navbar-nav>
                <b-nav-item href="#">Pharmacies</b-nav-item>
                <b-nav-item href="#">Hospitals</b-nav-item>
                <b-nav-item href="#">Doctors</b-nav-item>
            </b-navbar-nav> -->

            <!-- Right aligned nav items -->
            <!-- <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <b-nav-item-dropdown right> -->
                <!-- Using 'button-content' slot -->
                <!-- <template #button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        
        </div> -->
        
        <b-dropdown id="dropdown-1" text="Location" class="m-md-2">
            <b-dropdown-item @click="test" value="tunis">tunis</b-dropdown-item>
            <b-dropdown-item @click="test" value="ariana">ariana</b-dropdown-item>
            <b-dropdown-item @click="test" value="ben arous">ben arous</b-dropdown-item>
            <b-dropdown-item @click="test" value="manouba">manouba</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
        </b-dropdown>
        <b-container class="bv-example-row">
            <b-row class="justify-content-md-center">
                <b-col cols="12" md="auto">
                    <!-- <h4>Here is the Pharmacie Component</h4> -->
                    <div v-for="pharmacie in pharmacies" :key="pharmacie._id" class="mt-4">
                        <b-card v-bind:img-src="require('../.././assets/clinic.png')" img-alt="Card image" img-left class="mb-3">
                            <b-card-text>
                                <b>Pharmacy : </b>{{pharmacie.pharmacy}}
                            </b-card-text>
                            <b-card-text>
                                <b>Phone Number : </b>{{pharmacie.phoneNumber}}
                            </b-card-text>
                            <b-card-text>
                                <b>email : </b>{{pharmacie.email}}
                            </b-card-text>
                            <b-card-text>
                                <b>Adress : </b>{{pharmacie.adress}}
                            </b-card-text>
                            <b-card-text>
                                <b>Disponibility : </b>{{pharmacie.disponibility}}
                            </b-card-text>
                        </b-card>

                        <!-- <b-card v-bind:img-src="require('../.././assets/clinic.png')" img-alt="Card image" img-right>
                            <b-card-text>
                                <b>Pharmacy : </b>Ben Arous Pharmacy
                            </b-card-text>
                            <b-card-text>
                                <b>Phone Number : </b>71309897
                            </b-card-text>
                            <b-card-text>
                                <b>email : </b>ben-arous@gmail.com
                            </b-card-text>
                            <b-card-text>
                                <b>Adress : </b>Ben Arous
                            </b-card-text>
                            <b-card-text>
                                <b>Disponibility : </b>12h/24 from monday to saturday
                            </b-card-text>
                        </b-card> -->
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
    name: 'UserPharmacy',
    data () {
        return {
            pharmacies: null,
            index: 0,
            fetched:false
        }
    },
    methods: {
        async test(e){
            this.$vs.loading({type:'radius'})
            this.fetched=false
            var pharmacies = await axios.post('http://localhost:3000/api/pharmacy/findPharmacy',{adress:e.target.innerText})
            this.pharmacies = pharmacies.data
            setTimeout(()=>{
                this.fetched=true
                this.$vs.loading.close()
            },1000)
        }
    },
    async mounted() {
        this.$vs.loading({type:'radius'})
        var pharmacies = await axios.get('http://localhost:3000/api/pharmacy')
            this.pharmacies = pharmacies.data
        setTimeout(()=>{
            this.fetched=true
    this.$vs.loading.close()
        },2500)
    }
}
</script>

<style>

</style>