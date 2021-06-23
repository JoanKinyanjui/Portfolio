import React,{Component} from 'react'
class Form extends React.Component {
    constructor(){
        super();
        this.state={
            username:'',
            comments:'',
            selection:''
        }
    }
    changeUsername=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    changeComments=(event)=>{
        this.setState({
            comments: event.target.value
        })
    }
    changeSelection=(event)=>{
        this.setState({
            selection:event.target.value
        })
}

        render() {
return(
    <div>
        <form>
            <label>
                Username:
            </label>
            <input type='text' value={this.state.username} onChange={this.changeUsername}/>

    <div>
        <label>
            Comments....
        </label>
        <textarea value={this.state.comments} type='text' onChange={this.changeComments}>

        </textarea>
    </div>
            <div>

                    <label>
                        Select
                    </label>
                <select value={this.state.selection} onChange={this.changeSelection}>
                    <option  value='Reactjs'>React js</option>

                    <option  value='Reactjs'>React js</option>

                    <option  value='Reactjs'>React js</option>

                    <option  value='Python'>Python</option>

                    <option  value='Reactjs'>React js</option>
                </select>
            </div>
        </form>
    </div>
)
    }
}
export default Form;