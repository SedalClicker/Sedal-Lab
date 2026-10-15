# 새달랩(SE:DAL) 초콜릿 클리커 커스텀

- `index.html` : 커스텀 페이지 (몸통·버튼·스위치 축 선택, 주문 코드 생성)
- `check.html` : 주문코드 확인 전용 페이지 (`check.html#c=SD-...` 형식 링크 지원)
- PWA: `manifest.webmanifest`, `sw.js`, `icons/`

## 배포 (GitHub Pages)
Settings → Pages → Source: Deploy from a branch → Branch: `main` / `/(root)` → Save

## 수정 후 반영
파일을 바꾼 뒤 `sw.js`의 `CACHE` 이름(버전)을 올리면 설치된 앱에도 새 버전이 반영됩니다.
