import axios from 'axios';

export default axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode',
});
