import React from "react";
import { FormControl, Input, Heading, Text } from "native-base";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function solicitudMantenimiento(){

    const [startDate, setStartDate] = React.useState(new Date());


    return(
        <FormControl isRequired isInvalid >
           <Heading color={"black"} textAlign="center" fontFamily="body">Solicitud de Mantenimiento Correctivo</Heading>
            <Text  fontSize="md" color={"black"}>Fecha:</Text>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <FormControl.Label>Favorite framework is React</FormControl.Label>
            <Input p={2} placeholder="Is it react?" />
            <FormControl.HelperText>
                We'll keep this between us.
            </FormControl.HelperText>
            <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
        
        </FormControl>
        
    );
}
export default solicitudMantenimiento