import useSWR from 'swr'
import axios from 'axios'

export default function useAxios(url) {
    const { data, error} = useSWR(url, async url => {
        const res = await axios.get(url)

        return res.data
    })
  return { data, error };
}

