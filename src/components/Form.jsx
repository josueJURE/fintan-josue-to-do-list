export default function Form(props) {
    function handleSubmit(event) {
        event.preventDefault();
        // .addTask() is essentially a method for props as it is the function
        // that is being passed to '<Form />' in App.jsx which is then available
        // here via props/as a prop. 'say hell' is the value being passed to the 'addTask()'
        // functions that is "stored" in props (probably definitely the incorrect terminology)
        props.addTask('say hell');
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label 
                    htmlFor="new-todo-input" 
                    className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
            />
            <button type="submit" className="btn btn__primary
            btn__lg">
                Add
            </button>
        </form>
    );
}