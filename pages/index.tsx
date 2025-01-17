import type {NextPage} from 'next'
import Head from 'next/head'
import Result from "../components/Result";
import {useState} from "react";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {TextField, Autocomplete} from "@mui/material";
import Paper from "@mui/material/Paper";

const Home: NextPage = () => {
  const [input, setInput] = useState("")
  const [searchSuggestions] = useState<string[]>([
    "Which country or region contributes the most to programming languages?",
    "How many tables are in the dataset?",
    "How many events are in the dataset?",
    "How many repositories are in the dataset?",
    "How many event types are in the dataset?",
    "What is the range of time for the data in the dataset?",
  ])
  const handleInputChange = (event: any, newValue: string) => {
    setInput(newValue);
  };

  const [question, setQuestion] = useState("")

  return (
    <div className="flex min-h-screen flex-col items-center justify-center"
         style={{backgroundColor: "#f5f5f5"}}>
      <Head>
        <title>Mirror</title>
        <link rel="icon"
              href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪞</text></svg>"/>
      </Head>


      <Paper className={"w-full p-4"}>

        <div className="pt-2 relative mx-auto text-gray-600 w-full flex items-end	">
          <Autocomplete
            freeSolo
            fullWidth
            value={input}
            onInputChange={handleInputChange}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                className="flex flex-grow"
                label={"🪞Mirror, Mirror on the Wall"}
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                  endAdornment: <IconButton type="button" sx={{p: '10px'}} aria-label="search"
                                            onClick={() => setQuestion(input)}>
                    <SearchIcon/>
                  </IconButton>
                }}
              />
            )}
            options={searchSuggestions}
          />
        </div>

      </Paper>
      <div className="mt-3"/>
      <main className="flex w-full flex-1 flex-col  px-20">
        <Result question={question}/>
      </main>
    </div>
  )
}


export default Home



