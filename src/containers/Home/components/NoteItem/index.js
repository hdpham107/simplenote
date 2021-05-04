import React, { Component } from 'react'

export default class NoteItem extends Component {
    render() {
        return (
            <div className="col-sm-3">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>

            </div>

        )
    }
}
