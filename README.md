# 오늘의브랜딩, 병원 전문 마케팅의 대표 AUBE

프로젝트 실행 방법

```bash
# yarn으로 실행할 경우
yarn
yarn dev

# npm으로 실행할 경우
npm i
npm run dev
```
## 실행 전 설정해야 할 환경 변수

파일 최상단에 `.env` 파일을 생성 후 아래 내용을 입력합니다.
EMAIL과 PASS_KEY는 사용자의 email과 passkey를 입력해주세요.

```bash
EMAIL=""
HOST_SERVER="smtp.naver.com"
PASS_KEY=""
HOST="naver"
```


## vercel 재배포 방법

아래 명령어를 입력하여 로그인 방식을 이메일로 선택합니다. 이메일 작성탭에 vercel에 가입한 이메일 계정 입력 후 이메일로 전송된 인증 링크에서 로그인 승인을 하시면 CLI상에서 vercel로 바로 배포가 가능합니다.

```bash
vercel login 
```

로그인 후 배포하기

```bash
vercel build
vercel deploy --prebuilt
vercel --prod
```

더 자세한 정보는 해당 링크에서 확인할 수 있습니다. https://vercel.com/docs/cli
