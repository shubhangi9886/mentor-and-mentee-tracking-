import React, { Component } from 'react';

class Mentor extends Component {
    render() {
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent className={classes.CardContent}>
                        <button className={classes.button} onClick={() => { this.setState({ editing: true }); }}> Edit </button>
                        <TextField className={classes.TextField} label="Mentee Name" />
                        <br />
                        <br />
                        <TextField className={classes.TextField} label="Mentor Name" />
                        <br />
                        <br />
                        <TextField className={classes.TextField} label="How much month spend here" />
                        <br />
                        <br />
                        <TextField className={classes.TextField} label="Where is in study" />
                        <br />
                        <br />
                        <TextField className={classes.TextField} label="How was study is going" />
                        <br />
                        <br />
                        <TextField className={classes.TextField} label="English Mentor" />
                        <br />
                        <br />
                        <TextField className={classes.TextField} label="From Where" />
                        <br />
                        <br />
                        <TextField className={classes.TextField} label="How much she done" />
                        <br />
                        <br />
                        <TextField className={classes.TextField} label="Mentor Problem" />
                        <br />
                        <br />
                        <TextField className={classes.TextField} label="Study Schedule" />
                        <br />
                        <br />
                        <TextField className={classes.TextField} label="How many hours doing study" />
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Mentor;