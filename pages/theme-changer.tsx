import { Layout } from '@/components/layouts'
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'

const ThemeChangerPage = () => {

    const [currentTheme, setCurrentTheme] = useState('light')

    const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedTheme = event.target.value
        console.log({ selectedTheme })
        setCurrentTheme(selectedTheme)
    }

    return (
        <Layout>
            <Card>
                <CardContent>
                    <FormControl>
                        <FormLabel>Tema</FormLabel>
                        <RadioGroup
                            onChange={onThemeChange}
                            value={currentTheme}>
                            <FormControlLabel value='light' control={<Radio />} label='Light' />
                            <FormControlLabel value='dark' control={<Radio />} label='Dark' />
                            <FormControlLabel value='custom' control={<Radio />} label='Custom' />
                        </RadioGroup>
                    </FormControl>
                </CardContent>
            </Card>
            <h1 className='text-3xl'>ThemeCHangerPage</h1>
        </Layout>
    )
}

export default ThemeChangerPage
