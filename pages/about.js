import Head from 'next/head';
import Script from 'next/script';
import NavBar from '../components/NavBar';
import Seo from '../components/Seo';
import { useState, useEffect, useRef } from 'react';
import Document from './_document';

export default function About() {
  // var mapOptions = {
  //   center: new naver.maps.LatLng(37.3595704, 127.105399),
  //   zoom: 10,
  // };
  // var map = new naver.maps.Map('map', mapOptions);
  // router.push(`/map/${title}`);

  const [myLocation, setMyLocation] = useState({
    latitude: 37.4979517,
    longitude: 127.0276188,
  });

  //현재 위치를 추적합니다.
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    // 위치추적에 성공했을때 위치 값을 넣어줍니다.
    function success(position) {
      setMyLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    // 위치 추적에 실패 했을때 초기값을 넣어줍니다.
    function error() {
      setMyLocation({ latitude: 37.4979517, longitude: 127.0276188 });
    }
  }, []);

  const mapRef = useRef();

  useEffect(() => {
    if (typeof myLocation !== 'string')
      mapRef.current = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(
          myLocation.latitude,
          myLocation.longitude
        ),
        zoomControl: true,
      });
  }, [mapRef, myLocation]);

  return (
    <div>
      <Seo title='About' />
      <h1>지도</h1>
      <div id='map' style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
}

// export async function getServerSideProps() {
//   const { results } = await (
//     await fetch(`http://localhost:3000/api/about`)
//   ).json();
//   return {
//     props: { results },
//   };
// }
