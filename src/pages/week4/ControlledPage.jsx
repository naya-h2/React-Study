import { useState } from 'react';

function ControlledPage() {
  const [value, setValue] = useState('');

  console.log('reRendering!: ', value);

  return (
    <form>
      <h2>제어 컴포넌트 예시</h2>
      <p>사용자 input(state): {value}</p>
      <input name="user" placeholder="4글자 이상 입력" value={value} onChange={(e) => setValue(e.target.value)} />
      <button disabled={value.length < 4}>제출하기</button>
    </form>
  );
}

export default ControlledPage;
