const MyMessage = () => {
    // Here is the question mark again, checks to see if its there before it loads it
    if(message?.attachements?.length > 0){
        return (
            <img
                scr={message.attachements[0].file}
                alt="message-attachment"
                className="message-image"
                style={{float: 'right'}}
            />
        )
    }
    return (
        <div className="message" style={{float: 'right', marginRight='18px', color: 'white', backgroundColor: '#3b2a50'}}>
            {message.text}
        </div>
    )

}

export default MyMessage;