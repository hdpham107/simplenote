import React, { Component } from 'react'

export default class NoteForm extends Component {
    render() {
        return (
            <div>
                <h4>THEM GHI CHU</h4>
                <form>
                    <div classname="form-group">
                        <label htmlfor="title">Tieu de</label>
                        <input type="text" classname="form-control" name id="title" placeholder />
                    </div>
                    <div classname="form-group">
                        <label htmlfor="content">Noi dung</label>
                        <input type="text" classname="form-control" name id="content" placeholder />
                    </div>
                    <button classname="btn btn-success">Thêm</button>
                </form>
            </div>


        )
    }
}
