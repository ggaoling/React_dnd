# React-dnd
## React-dnd apis:
```
* DragSource(type,spec,collect) 包装需要拖动的组件 
* DropTarget(type,spec,collect) 包装接收拖拽元素的组件 
* DragDropContext 包装拖拽根组件，包裹DragSource & DropTarget
参数说明：（source组件为DragSource包装的组件，target组件为DropTarget包装的组件） 
```
### 1. type 拖拽类型 必填 
```
string| symbol 
当source组件的type和target组件的type一致，target组件可以接收source组件
```
### 2. spec 拖拽事件的方法对象 必填 
- DragSource specObj 
```
beginDrag(props,monitor,component):拖动开始时触发的事件，必须。返回跟props相关的对象。 
endDrag(props, monitor, component): 拖动结束时触发的事件，可选。 
canDrag(props, monitor): 当前是否可以拖拽的事件，可选。 
isDragging(props, monitor): 拖拽时触发的事件，可选。 
```
- DropTarget specObj 
```
drop(props, monitor, component) 组件放下时触发的事件，可选。 
hover(props, monitor, component) 组件在DropTarget上方时响应的事件，可选。 
canDrop(props, monitor) 组件可以被放置时触发的事件，可选。 
其中，props:当前组件的props 
monitor:查询当前的拖拽状态 
component：当前组件实例
```
### 3. collect 一个函数，把拖拽过程中需要的信息注入组件的props，接受两个参数 connect & monitor 必填

#### 参数connect 
- source组件 
```
collect中的connect是DragSourceConnector的实例，内置两个方法 dragSource() & dragPreview() 
dragSource()返回一个方法，将source组件传入改方法，可以将source DOM和 React Dnd backend 连接起来 
dragPreview()返回一个方法，可以传入节点，作为拖拽预览时的角色
```
-target组件 
```
collect中的connect是DropTargetConnector的实例，内置两个方法 dropTarget() & dragSource() 返回可以将drop target 和React DnD backend连接起来的方法
```
#### 参数 monitor 
-source组件 
collect中monitor是DragSourceMonitor的实例  
```
 内置方法列表：
monitor.canDrag() // 是否能被拖拽 
monitor.isDragging() // 是否正在拖拽 
monitor.getItemType() // 拖拽组件type 
monitor.getItem() // 当前拖拽的item 
monitor.getDropResult() // 查询drop结果 
monitor.didDrop() // source是否已经drop在target 
monitor.getInitialClientOffset() // 拖拽组件初始拖拽时offset 
monitor.getInitialSourceClientOffset() 
monitor.getClientOffset() // 拖拽组件当前offset 
monitor.getDifferenceFromInitialOffset() //当前拖拽offset和初始拖拽offset的差别 
monitor.getSourceClientOffset()
```
-target组件 
collect中monitor是DropTargetMonitor的实例 
```
 内置方法列表：
monitor.canDrop() // 是否可被放置 
monitor.isOver(options) // source是否在target上方 
monitor.getItemType() // 拖拽组件type 
monitor.getItem() // 当前拖拽的item 
monitor.getDropResult() // 查询drop结果 
monitor.didDrop() // source是否已经drop在target 
monitor.getInitialClientOffset() // 拖拽组件初始拖拽时offset 
monitor.getInitialSourceClientOffset() 
monitor.getClientOffset() // 拖拽组件当前offset 
monitor.getDifferenceFromInitialOffset() // 当前拖拽offset和初始拖拽offset的差别 
monitor.getSourceClientOffset()
```
:sparkles: :sparkles:
