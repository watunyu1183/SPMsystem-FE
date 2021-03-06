import React, { useState } from "react"
import {Link} from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
})
function Carditem(props) {
  const classes = useStyles()
  return (
    <>
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              IT60-0{props.group.id} : {props.group.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Advisor : {props.group.advisor}
            </Typography>
          </CardContent>

          <CardActions>
            <Link to = {`/Otherteam/:${props.group.id}`} >
            <Button size="small" color="primary">
            Learn More
            </Button></Link>
          </CardActions>
        </Card>
      </div>
    </>
  )
}
export default Carditem
