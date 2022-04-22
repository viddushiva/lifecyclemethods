// Lifecycle Methods ( Class Component )
// Mounting :
// When an instance of a component is being created and inserted into the DOM.

// Updating :
// When a component is being re-render as a result of changes to either its props or state

// Unmounting :
// When a component is being removed from the DOM

// Mounting :
// constructor [ only in mounting ]
// static getDerivedStateFromProps
// render
// componentDidMount [ only in mounting ]
// Updating :

// render

// componentDidUpdate
// Unmounting :
// componentWillUnmount
// Mouting Phase
// Constructor
// A special type of function that will get called whenever a new component is created.
// Used to initialize states & Binding events.
// Not perform, Http req.
// static getDerivedStateFromProps (rarely used)
// When the state of component depends on change in props.
// set the state
// Not perform, Http req.
// render
// Only Required Method
// Return JSX
// Children component Lifecycle methods also get execute
// Not perform, Http req.
// componentDidMount
// Invoked immediately after a component and its child components have been rendered to DOM
// Perform any AJAX call to load data.
// Updating Phase

// Render
// Only Required Method
// Return JSX
// Not perform, Http req.

// componentDidUpdate()
// called after the render is finished in the re-render Cycles.
// Unmounting Phase ( LAST WISH ) componente will unmount
// Method is invoked immediately before a component is unmounted and destroyed.
// Cancelling any network req. , also invalidating timers.
// DO NOT CALL THE SetSTATE METHOD
console.log("hi");