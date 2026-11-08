# 새달랩(SE:DAL) 초콜릿 클리커 커스텀

- `index.html` : 커스텀 페이지 (몸통·버튼·스위치 축 선택, 주문 코드 생성)
- `check.html` : 주문코드 확인 전용 페이지 (`check.html#c=SD-...` 형식 링크 지원)
- PWA: `manifest.webmanifest`, `sw.js`, `icons/`

## 배포 (GitHub Pages)
Settings → Pages → Source: Deploy from a branch → Branch: `main` / `/(root)` → Save

## 수정 후 반영
파일을 바꾼 뒤 `sw.js`의 `CACHE` 이름(버전)을 올리면 설치된 앱에도 새 버전이 반영됩니다.

## 크리스마스 클리커 커스텀 (`xmas/`)
- 주소: https://sedalclicker.github.io/Sedal-Lab/xmas/
- 주문 코드는 맨 앞이 `크`이고 최대 20자입니다. 초콜릿 클리커 코드와 겹치지 않습니다.
- 스마트스토어 상품을 등록하면 `xmas/index.html`의 `ORDER_URL`에 주소를, `PRICE`에 가격을 넣습니다.
- `orders.html`은 `크` 코드를 `xmas/check.html`로 읽습니다. 스토어 상품명에 `커스텀`과 `크리스마스`가, 추가상품에 `버튼 변경: 아이콘` / `버튼 변경: 링` / `테두리 추가: 화이트·줄무늬`가 있어야 옵션 대조가 맞습니다.
- 파일을 바꾼 뒤 `xmas/sw.js`의 `CACHE` 버전을 올립니다.
