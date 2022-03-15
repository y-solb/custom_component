# custom component 모음집

- [Toggle](#toggle)
- [Modal](#modal)
- [Tab](#tab)
- [Tag](#tag)
- [AutoComplete](#autocomplete)
- [ClickToEdit](#clicktoedit)
- [Dropdown](#dropdown)

(계속 업데이트 중)

## 배포 링크

🔗 https://custom-component.netlify.app/

## Tech Stack

- HTML5
- JavaScript
- React
- styled components

### Toggle

- ON과 OFF의 상태를 isOn으로 관리합니다.
- input은 숨기고 label로 toggle을 만들었습니다. input의 id와 label의 htmlFor값을 똑같이 해서 연결시켜줬습니다.
- 클릭 시 onChange에서 handleToggle 실행합니다.
  handleToggle에서는 현재 isOn값을 반대로 업데이트해 줍니다.
- checkBox가 체크될 경우 left값을 변경해 위치를 바꿔줍니다.

```jsx
&:checked + ${CheckBoxLabel} ${Switch} {
left: calc(100% - 8px);
transform: translateX(-100%);
}
```

- CheckBoxLabel에서는 isOn의 true, false값에 따라 배경색이 결정됩니다.

### Modal

- 버튼 클릭 시 handleModal에서 isShow의 값을 반대로(true로) 바꿔줍니다.
- isShow가 true일 경우 Modal을 보여줍니다.
- ModalWrapper 밖의 부분이 클릭 시 닫힐 수 있도록 onClick에 handleModal을 넣어주었습니다.
- 이벤트 버블링을 막기 위해 e.target과 e.currentTarget이 같을 때만 Modal이 닫히도록 했습니다.
- Modal창이 열려있을 경우 뒤에 화면 스크롤을 방지하기 위해 useEffect에서 isShow가 true라면 overflow를 hidden으로 주었습니다.
  ```jsx
  useEffect(() => {
    isShow
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isShow]);
  ```

### Tab

- Tab 클릭 시 handleTab에서 tab의 값을 받아 currentTab에 업데이트를 해줬습니다.
- 현재 클릭된 Tab(currentTab.id)과 tab의 id(tab.id)가 같다면 selected값이 true가 되어 색상이 변경됩니다.

### Tag

- Wrapper는 전체를 감싸는 div입니다. 이 안에는 추가되는 tag를 담는 TagList와 input인 TagInput이 있습니다.
- input에 접근할 수 있도록 useRef를 이용해 inputRef를 넣어줬습니다.
- onKeyPress에서 키가 Enter라면 handleAdd을 실행합니다. handleAdd는 inputRef의 현재 값을 가져와 value라는 변수에 넣어줍니다. value가 있다면 setTags로 배열을 추가해 줬습니다. 그 후에는 inputRef의 현재 값을 초기화했습니다.
- 삭제 클릭 시 handleDelete에서 클릭된 tag의 값을 가져와 filter함수를 이용해 클릭된 tag의 값과 같지 않은 tag로 새로운 배열을 만들어 tags를 업데이트해 줬습니다.

### AutoComplete

- Input에서 `onChange` 발생 시 `handleChange`가 작동합니다. `handleChange`는 `textRef`의 현재 값을 가져와 `value`에 넣어줍니다. `value`의 값이 있다면 대소문자를 구별하지 않고 문자열 내 모든 패턴을 검색합니다. 정규식과 일치하는 부분을 리턴하여 `matches`에 담아줍니다. 필터링이 끝나면 `setOptions`에 `matches`를 넣어주어 업데이트해 줍니다.
- ClearBtn을 클릭 시 `handleClear`에서 `textRef`의 현재 값을 비워주고 options를 업데이트하기 위해 `handleChange`를 실행합니다.
- `option`을 클릭 시 `handleSelect`에서 클릭된 `option`을 받아 `textRef`의 현재 값으로 넣어준 후 `options`를 업데이트하기 위해 `handleChange`를 실행합니다.

### ClickToEdit

- `info`는 현재 Input의 값을 `display`는 입력 완료 시 보이는 값입니다.
- 각 Input에서 `onChange`가 발생하면 `handleChange`에서 `e.target.name`과 `e.target.value`를 가져와 `info`를 업데이트해 줬습니다.
- Input에서 포커스가 해제되었을 경우 `handleBlur`에서 `info`의 값을 가져와 `display`를 업데이트해 줬습니다.

### Dropdown

- `isDropdown`으로 dropdown이 열렸는지 닫혔는지 상태를 관리해 줍니다.
- 선택된 option이 있다면 `selectedOption`에 값을 넣어줍니다.
- OPTIONS를 `map` 함수로 돌려 dropdown 리스트를 만들어줬습니다.

### Container

- 각 component의 제목과 component를 감싸는 div로 이루어진 component입니다.

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
