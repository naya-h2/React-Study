import { useState } from 'react';

function YesStatePage() {
  let [userChoice, setUserChoice] = useState('일반공지');
  console.log(userChoice);

  return (
    <div>
      유저 선택: {userChoice}
      <br />
      <h2>setState를 통해 변경</h2>
      <button onClick={() => setUserChoice('일반공지')}>일반공지</button>
      <button onClick={() => setUserChoice('학사공지')}>학사공지</button>
      <button onClick={() => setUserChoice('종합봉사실 공지')}>종합봉사실 공지</button>
      <br />
      <br />
      <h2>setState를 사용하지 않고 변경</h2>
      <button onClick={() => (userChoice = '일반공지')}>일반공지</button>
      <button onClick={() => (userChoice = '학사공지')}>학사공지</button>
      <button onClick={() => (userChoice = '종합봉사실 공지')}>종합봉사실 공지</button>
    </div>
  );
}

export default YesStatePage;
