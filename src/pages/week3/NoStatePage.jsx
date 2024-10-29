function NoStatePage() {
  let user_choice = '일반공지';
  console.log(user_choice);
  return (
    <div>
      유저 선택: {user_choice}
      <br />
      <button onClick={() => (user_choice = '일반공지')}>일반공지</button>
      <button onClick={() => (user_choice = '학사공지')}>학사공지</button>
      <button onClick={() => (user_choice = '종합봉사실 공지')}>종합봉사실 공지</button>
    </div>
  );
}

export default NoStatePage;
