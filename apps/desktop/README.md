# 🌰 도토리 수집가 (Acorn Collector)

다람쥐처럼 디지털 도토리(텍스트)를 모으고 관리하는 데스크톱 앱입니다.

## 주요 기능

- 💻 클립보드 자동 모니터링
- 📝 복사한 텍스트 자동 저장
- 🌳 도토리 숲 시각화
- 🔄 크로스 플랫폼 동기화 (예정)

## 기술 스택

- Electron
- React
- TypeScript
- Vite
- pnpm

## 개발 환경 설정

### 요구 사항
- Node.js
- pnpm
- Windows 환경 설정
 - PowerShell 실행 정책: \Set-ExecutionPolicy RemoteSigned -Scope CurrentUser\

### 설치 및 실행

\\\ash
# 패키지 설치
pnpm install

# 개발 모드 실행
pnpm run electron:dev

# 빌드
pnpm run electron:build
\\\

## 프로젝트 구조

\\\
AC/
├── apps/
│   └── desktop/      # 데스크톱 앱
├── packages/
│   └── shared/       # 공유 패키지
└── docs/
   └── daily-logs/   # 개발 일지
\\\

## 개발 현황

자세한 개발 현황은 [개발 일지](docs/daily-logs)를 참고해주세요.

## 라이센스

ISC
