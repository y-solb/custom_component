# 원티드 프리온보딩 코스

## 배포 링크

🔗 https://wanted-pre-onboarding-ysb.netlify.app/

## 구현한 방법과 이유

- JavaScript
- HTML5
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

- CheckBoxLabel에 isOn의 true, false값에 따라 배경색이 결정됩니다.

### Modal

- 버튼 클릭 시 handleModal에서 isShow의 값을 반대로(true로) 바꿔줍니다.
- isShow가 true일 경우 Modal을 보여줍니다.
- ModalWrapper 밖의 부분이 클릭 시 닫힐 수 있도록 onClick에 handleModal을 넣어주었습니다.
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

- Input에서 onChange 발생 시 handleChange가 작동합니다. handleChange는 textRef의 현재 값을 가져와 value에 넣어줍니다. value의 값이 있다면 대소문자를 구별하지 않고 문자열 내 모든 패턴을 검색합니다. 정규식과 일치하는 부분을 리턴하여 matches에 담아줍니다. 필터링이 끝나면 setOptions에 matches를 넣어주어 업데이트해 줍니다.
- ClearBtn을 클릭 시 handleClear에서 textRef의 현재 값을 비워주고 options를 업데이트하기 위해 handleChange를 실행합니다.
- option을 클릭 시 handleSelect에서 클릭된 option을 받아 textRef의 현재 값으로 넣어준 후 options를 업데이트하기 위해 handleChange를 실행합니다.

### ClickToEdit

- info는 현재 Input의 값을 display는 입력 완료 시 보이는 값입니다.
- 각 Input에서 onChange가 발생하면 handleChange에서 e.target.name과 e.target.value를 가져와 info를 업데이트해 줬습니다.
- Input에서 포커스가 해제되었을 경우 handleBlur에서 info의 값을 가져와 display를 업데이트해 줬습니다.

### Container

- 각 component의 제목과 component를 감싸는 div로 이루어진 component입니다.

---

## 구현하면서 어려웠던 점과 해결 방법

Toggle

Toggle 작동을 자세히 보니 switch 클릭 시 배경이 채워지면서 움직이는 걸 발견했습니다.

이를 구현하기 위해 linear-gradient를 이용했습니다. CheckBoxLabel에서 isOn의 상태를 props로 받아서 동적으로 만들었습니다. isOn이 true와 false의 경우에 따라 다음과 같이 움직입니다.

```css
  background-position: ${(props) => (props.isOn ? "left" : "right")};
  background-image: ${(props) =>
    props.isOn
      ? "linear-gradient(to right, blueviolet 50%, lightgray 50%)"
      : "linear-gradient(to left, lightgray 50%, blueviolet 50%)"};
```

background의 넓이를 200%로 주어 화면상에 반만 보일 수 있도록 하였습니다.

ClickToEdit

input에서 값을 수정하고 focus를 잃었을 때(onBlur일 때) 수정된 내용이 반영되어야 했습니다. info라는 state 하나로 input의 값과 보이는 값을 관리하려니 onBlur가 발생하기 전에 onChange가 발생할 때마다 자동으로 업데이트가 되는 문제가 있었습니다.

이를 해결하기 위해 display라는 보이는 값을 관리라는 state를 만들어 주었습니다. onChange가 발생하면 info의 값을 업데이트해 주고 onBlur가 발생하면 info의 값을 가져와 display를 업데이트해 줬습니다.

---

## 실행 방법

원격 저장소를 복제 후 custom-component로 이동

```
git clone https://github.com/y-solb/wanted_pre_onboarding.git
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
