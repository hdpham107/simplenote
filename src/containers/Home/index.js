import React, { Component } from 'react'
import Header from './components/Header'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'

export default class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8" >
                            <NoteList />
                        </div>
                        <div className="col-sm-4" style={{ backgroundColor: "#D6CFC7" }}>
                            <NoteForm />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
