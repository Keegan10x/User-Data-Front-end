import React from 'react'



export default class GetUserData extends React.Component {
    state = {
        customers:null,
        htmlElem:null,
    }

    async componentDidMount(){
        const url = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole'
        const response = await fetch(url)
        const data = await response.json()


        let records = []
        for(const record of data){
            //console.log(Object.values(record))
            records.push(Object.values(record))
        }
        
        this.setState({ customers:records })
        //console.log(this.state.customers)


        let Elem = []
        function superFielder(customers){
            console.log(customers)
            for(let customer of customers){
                Elem.push(<tr>{subFielder(customer)}</tr>)
            }
        }

        function subFielder(customer){
            let subfield = []
            for(let field of customer){
                subfield.push(<td>{field}</td>)
            }
            return subfield
        }
        
        superFielder(this.state.customers)
        this.setState({ htmlElem:Elem })
    }

        
    
    
    
    render (){
    
        return (
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Created</th>
                    <th>Balance</th>
                </tr>
                {this.state.htmlElem}
            </table>
        )
    }
        
        
    
}
