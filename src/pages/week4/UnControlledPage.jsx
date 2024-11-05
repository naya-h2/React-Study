import { useRef, useState } from 'react';

function UnControlledPage() {
  const nicknameRef = useRef(null);
  const [value, setValue] = useState('');

  console.log('reRendering!: ', value);

  return (
    <form>
      <h2>비제어 컴포넌트 예시</h2>
      <p>사용자 input: {value}</p>
      <input name="nickname" ref={nicknameRef} placeholder="nickname을 입력해 주세요." />
      <button
        onClick={(e) => {
          e.preventDefault();
          setValue(nicknameRef.current.value);
        }}
      >
        제출하기
      </button>
    </form>
  );
}

export default UnControlledPage;
