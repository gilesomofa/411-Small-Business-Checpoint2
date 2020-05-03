import React from 'react';


class StudentGallery extends React.Component {
    state = [
        students = {
            name: '',
            id: '',
            behaviorComment: '',
            preferredBehavior:
                [
                    'on task',
                    'waited turn',
                    'used kind/respectful words',
                    'calm body',
                    'shared materials',
                    'transitioned quietly'
                ],
            nonPreferredBehavior: [
                'off task',
                'did not wait for turn',
                'unkind/abusive language',
                'not controlling body',
                'did not share materials',
                'did not transition quietly'
            ]

        }
    ]


render(){
    return(
        <div>
            
                {/* <form onSubmit={
                    (e) => {
                    event.preventDefault();
                    props.addStudent(localState);
            } */}
        </div>
        )
        }
        
}

