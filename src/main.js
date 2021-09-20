import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import qs from 'qs';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted() {
    const clientId = "7c9a183d9c30489ca2610df9c71a4cd6";
    const clientSecret = "c1f9b725062448729ecc8dfce2dbbbb3";
    const baseId64 = btoa(`${clientId}:${clientSecret}`);

    const headers = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${baseId64}`
      }
    };
    const data = {
      grant_type: 'client_credentials',
    };

    const getAuth = async () => {
      try {
        const response = await axios.post(
          'https://accounts.spotify.com/api/token',
          qs.stringify(data),
          headers
        );
        console.log(response.data.access_token);
        return response.data.access_token;
      } catch (error) {
        console.log(error);
      }
    }

    getAuth();
  }
}).$mount('#app')
