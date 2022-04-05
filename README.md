# custom component 모음집

- [Toggle](#toggle)
- [Modal](#modal)
- [Tab](#tab)
- [Tag](#tag)
- [Dropdown](#dropdown)
- [Checkbox](#checkbox)

(계속 업데이트 중)

## 배포 링크

🔗 https://custom-component.netlify.app/

## Tech Stack

- JavaScript
- React
- styled components

### Toggle

- input의 `type`은 `checkbox`로 주고 label이 보이도록 만들기 위해 input은 숨기고 label로 toggle을 만들었습니다. input의 `id`값과 label의 `htmlFor`값을 똑같이 해서 연결시켜줬습니다.
- `CheckBoxInput`이 체크될 경우 `left`값을 변경해 위치를 바꿔줍니다.

```jsx
&:checked + ${CheckBoxLabel} ${Switch} {
left: calc(100% - 8px);
transform: translateX(-100%);
}
```

### Modal

- `ModalWrapper` 밖의 부분이 클릭 시 닫힐 수 있도록 onClick에 `handleBackground`를 넣어주었습니다. 이벤트 버블링을 막기 위해 `e.target`과 `e.currentTarget`이 같을 때만 Modal이 닫히도록 했습니다.
- Modal창이 열려있을 경우 뒤에 화면 스크롤을 방지하기 위해 `useEffect`에서 `isShow`가 `true`라면 `overflow`를 `hidden`으로 주었습니다.
  ```jsx
  useEffect(() => {
    isShow
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isShow]);
  ```

### Tab

- Tab 클릭 시 `handleTab`에서 `tab`의 값을 받아 `currentTab`에 업데이트를 해줬습니다.
- 현재 클릭된 Tab(`currentTab.id`)과 tab의 id(`tab.id`)가 같다면 `selected`값이 `true`가 되어 색상이 변경됩니다.

### Tag

- `TagWrapper`는 전체를 감싸는 div입니다. 이 안에는 추가되는 tag를 담는 `TagList`와 input인 `TagInput`이 있습니다.
- input에 접근할 수 있도록 `useRef`를 이용해 `inputRef`를 넣어줬습니다.
- `onKeyPress`에서 키가 Enter라면 `handleAdd`을 실행합니다. `handleAdd`는 `inputRef`의 현재 값을 가져와 `value`라는 변수에 넣어줍니다. `value`가 있다면 `tags`에 추가해 줬습니다. 그 후에는 `inputRef`의 현재 값을 초기화했습니다.
- 삭제 클릭 시 `handleDelete`에서 클릭된 tag의 값을 가져와 filter 함수를 이용해 클릭된 tag의 값과 같지 않은 tag로 새로운 배열을 만들어 `tags`를 업데이트해 줬습니다.

### Dropdown

- `isDropdown`으로 dropdown이 열렸는지 닫혔는지 상태를 관리해 줍니다.
- 선택된 option이 있다면 `selectedOption`에 값을 넣어줍니다.
- OPTIONS를 `map` 함수로 돌려 dropdown 리스트를 만들어줬습니다.

### Checkbox

- `isCheck`로 체크박스가 선택되었는지 관리해 줍니다.

- input의 `type`은 `checkbox`로 주고 label이 보이도록 만들기 위해 input은 숨겨줬습니다. input의 `id`값과 label의 `htmlFor`값을 똑같이 해서 연결시켜줬습니다.

### Container

- 각 component의 제목과 component를 감싸는 div로 이루어진 공통 component입니다.

## 실행 방법

원격 저장소를 복제 후 custom-component로 이동

```
git clone https://github.com/y-solb/custom_component.git
cd custom-component
```

node_modules 설치

```
npm install
```

실행

```
npm start
```
