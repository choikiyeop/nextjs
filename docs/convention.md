### 커밋 컨벤션

1. 기본 포맷
   <type>[optional scope]: <description>

   [optional body]

   [optional footer(s)]

2. 상세 설명

- type
  feat: 기능 추가
  fix: 버그 수정
  refactor: 리팩토링
  design: 사용자 UI 디자인 변경
  test: 테스트 코드
  build: 빌드 관련
  style: 코드 스타일 변경
  docs: 문서 수정
  comment: 추석 추가 및 변경
  chore: 다른 유형에 속하지 않는 것

- body
  한 줄당 72자 내로 작성
  최대한 상세히 작성
  How 보다는 What, Why를 중심으로 작성

- footer
  fixes: 이슈 수정중(아직 해결되지 않은 경우)
  resolves: 이슈 해결
  ref: 참조할 이슈
  related to: 해당 커밋에 관련된 이슈(아직 해결되지 않은 경우)

3. 예시

feat: 사용자 프로필 페이지 추가

- 사용자 프로필 페이지 및 라우팅 구현
- 프로필 정보를 보여주는 프로필 카드 컴포넌트 구현
- 프로필 수정 기능 구현

resolves: #123
ref: #456, #789
