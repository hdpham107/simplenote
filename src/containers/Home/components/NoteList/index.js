import React, { Component } from 'react'
import NoteItem from '../NoteItem'

export default class NoteList extends Component {
    render() {
        return (
            <div className="" >
                <h4>Danh Sách Ghi Chú</h4>
                <div className="container">
                    <div className="row">
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                    </div>
                </div>
            </div>
        )
    }
}
