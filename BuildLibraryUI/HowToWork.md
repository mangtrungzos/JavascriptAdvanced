# 1. script.js
\\ Đầu tiên nó sẽ import {attach}
\\ attach: truyền đối số là {component, root}

# 2. core.js
\\ return { attach() ... }
\\ Khi thực thi: set root làm key, component là value   
\\ Gọi lại render()
\\
\\ function render() {...}
\\ Nó sẽ map qua roots, nhận lại root vừa set và component
\\ Bởi vì component là App, App lại là hàm
\\ const output = component() : Khi core.js chạy thì sẽ gọi lại hàm đó
\\ Trong trường hợp đầu tiên nó sẽ gọi hàm App()
\\ Nên sẽ nhận được value của App: return html`...`
\\ html sẽ được đẩy qua hàm html nên nó sẽ xử lí những vấn đề lúc đầu
\\ Lưu vào output -> đẩy vào root

# 3. app.js
\\ createStore(reducer): là một hàm và nhận đối số 'reducer'
\\ Mong muốn: reducer trong TH mặc định trả về một giá trị khởi tạo
\\ Để làm state ban đầu
\\ Do đó ban đầu ta sẽ có init mặc định sẵn là BMW : const init = {...}
\\ state = init, trong TH đầu tiên các 'action' chưa được thực hiện
\\ Lọt vào case: default: return state (mặc định)
\\ Nên let state = reducer() (core.js) | state nhận được giá trị: init

\\ Khi đó ta sẽ chỉ còn 2 hàm là : connect(...), dispatch(...)

\\ Giá trị mặc định của init : cars: ['BMW'] 
\\ App.js import { connect }
\\ const connector = connect() : Thực thi hàm connect và trả về 1 hàm mới lưu vào connector()
\\ Và connector nhận app : export default connector(App)

## connect()
\\ connect return về một arrow func với đối số : component
\\ Nên return ... sẽ được lưu vào biến connector
\\ Và bởi vì connector là một hàm nhận đối số là component
\\ Nên là sẽ dùng nó : connector(App) : Bởi vì nó là hàm nên nó lại gọi hàm và nhận đối số component là App -> truyền component vào connector
\\ Trong  connector(App) sẽ trả về 1 hàm mới ở tầng 3 của return
\\ => component(Object.assign(...)) : Hàm mới này sẽ chạy component
\\ Trong TH này nghĩa là nó sẽ run App func
\\ Trả lại 1 Object được hợp nhất bởi : props, state (Kho dữ liệu) và kể cả những đối ...args trong tương lai cũng sẽ hợp nhất vào 
\\ Nên cuối cùng sẽ nhận được biến gọi là biến props
\\ Gọi component(Object.assign(...)) : thực ra đang gọi App()
\\ Và truyền cục dữ liệu (Object.assign(...)) thì ta sẽ nhận được ở { cars } : function App({ cars })
\\ Bởi vì khi truyền nó sẽ merge cả state (trong state đang có cars:)
\\ Nên khi ở App sẽ nhận được cars 
\\ => Giúp truyền dữ liệu từ store -> view
\\ Bởi cars là mảng nên khi map : ${cars.map(car => `<li>${car}</li>`).join('')} trả ra HTML và lại được đẩy qua hàm html (giải quyết: loại bỏ dấu ',' | loại bỏ boolean)

\\ Khi bắt sự kiện onclick : Gọi dispatch truyền action: 'ADD' và value: 'porsche'
\\ Khi dispatch được chạy sẽ gọi reducer(state, action, args)
\\ Nó lấy giá trị state từ lần trước đó là : 'BMW' đẩy ngược vào reducer(state, ...) làm đối số đầu vào | đẩy action mới, args (dữ liệu) mới sang
\\ Trong reducer đang bắt TH : action: 'ADD'
\\ Ta sẽ lấy ra dữ liệu mới từ args là oto mới 
\\ Sau đó return object mới
\\ Object mới nó lại được tạo ra từ object cũ và nó chỉ sửa cars: bằng cách thêm newCar vào cuối mảng : cars: [...state.cars, newCar] nó return ra ngoài
\\ Nó thỏa mãn điều kiện : nhận state cũ và nó chỉnh sửa : action => đẩy ra state mới : state = ...
\\ Gọi lại render() -> hàm component() được gọi lại mà component lại là App
\\ Nên sẽ gọi lại func App() và để gọi App nó sẽ phải thông qua connector thế nên nó lại thông qua connect()
\\ Và cuối cùng nó vòng lại (core.js) lấy state mới : let state = reducer()
\\ view nhận được oto mới và nó render lại