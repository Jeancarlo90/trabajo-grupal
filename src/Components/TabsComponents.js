import  '../App.css'
import React, { useEffect, useState } from "react"
import ListBuild from '../Components/ListBuild';
import dataRanking from '../Data/DataRanking.json'

const BASE_URL = "https://backendtrabajo-production.up.railway.app"

const TabsComponents = (props) => {
    const [graphicsList, setGraphicsList] = useState([])
    const [memoryList, setMemoryList] = useState([])
    const [processorList, setProcessorList] = useState([])

    const httpGetGraphicsAsyncAwait = async () => {
        const resp = await fetch(
            `${BASE_URL}/components?type=GRAPHICS`
        )
        const data = await resp.json()
        setGraphicsList(data)
    }
    const httpGetMemoryAsyncAwait = async () => {
        const resp = await fetch(
            `${BASE_URL}/components?type=MEMORY`
        )
        const data = await resp.json()
        setMemoryList(data)
    }
    const httpGetProcessorAsyncAwait = async () => {
        const resp = await fetch(
            `${BASE_URL}/components?type=PROCESSOR`
        )
        const data = await resp.json()
        setProcessorList(data)
    }

    useEffect(() => {
        httpGetGraphicsAsyncAwait()
        httpGetMemoryAsyncAwait()
        httpGetProcessorAsyncAwait()
    }, [])

    return(
        <main>
            <ul class="nav nav-pills mb-3 nav-fill" id="pills-tab" role="tablist">
                <li class="nav-item me-2" role="presentation">
                    <button class="nav-link active"  id="pills-graphics-tab" data-bs-toggle="pill" data-bs-target="#pills-graphics" type="button" role="tab" aria-controls="pills-graphics" aria-selected="true">Graphics</button>
                </li>
                <li class="nav-item me-2" role="presentation">
                    <button class="nav-link" id="pills-processor-tab" data-bs-toggle="pill" data-bs-target="#pills-processor" type="button" role="tab" aria-controls="pills-processor" aria-selected="false">Processor</button>
                </li>
                <li class="nav-item me-2" role="presentation">
                    <button class="nav-link" id="pills-memory-tab" data-bs-toggle="pill" data-bs-target="#pills-memory" type="button" role="tab" aria-controls="pills-memory" aria-selected="false">Memory</button>
                </li>

                <li class="nav-item me-2" role="presentation">
                    <button class="nav-link" id="pills-storage-tab" data-bs-toggle="pill" data-bs-target="#pills-storage" type="button" role="tab" aria-controls="pills-storage" aria-selected="false">Storage</button>
                </li>
                <li class="nav-item me-2" role="presentation">
                    <button class="nav-link" id="pills-cooler-tab" data-bs-toggle="pill" data-bs-target="#pills-cooler" type="button" role="tab" aria-controls="pills-cooler" aria-selected="false">Cooler</button>
                </li>
                <li class="nav-item me-2" role="presentation">
                    <button class="nav-link" id="pills-windows-tab" data-bs-toggle="pill" data-bs-target="#pills-windows" type="button" role="tab" aria-controls="pills-windows" aria-selected="false">Windows</button>
                </li>
                <li class="nav-item me-2" role="presentation">
                    <button class="nav-link" id="pills-power-tab" data-bs-toggle="pill" data-bs-target="#pills-power" type="button" role="tab" aria-controls="pills-power" aria-selected="false">Power Supply</button>
                </li>
            </ul>
                <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-graphics" role="tabpanel" aria-labelledby="pills-graphics-tab">
                {
                    graphicsList.map(item => (
                        <ListBuild  key={item.id} periferico={item}></ListBuild>
                    ))
                }
                </div>
                <div class="tab-pane fade" id="pills-processor" role="tabpanel" aria-labelledby="pills-processor-tab">
                    {
                        processorList.map(item => (
                            <ListBuild  key={item.id} periferico={item}></ListBuild>
                        ))
                    }
                </div>
                <div class="tab-pane fade" id="pills-memory" role="tabpanel" aria-labelledby="pills-memory-tab">
                    {
                        memoryList.map(item => (
                            <ListBuild  key={item.id} periferico={item}></ListBuild>
                        ))
                    }
                </div>
                <div class="tab-pane fade" id="pills-storage" role="tabpanel" aria-labelledby="pills-storage-tab">
                    {
                        processorList.map(item => (
                            <ListBuild  key={item.id} periferico={item}></ListBuild>
                        ))
                    }
                </div>
                <div class="tab-pane fade" id="pills-cooler" role="tabpanel" aria-labelledby="pills-cooler-tab">
                    {
                        dataRanking.map(item => (
                            <ListBuild  key={item.id} periferico={item}></ListBuild>
                        ))
                    }
                </div>
                <div class="tab-pane fade" id="pills-windows" role="tabpanel" aria-labelledby="pills-windows-tab">
                    {
                        dataRanking.map(item => (
                            <ListBuild  key={item.id} periferico={item}></ListBuild>
                        ))
                    }
                </div>
                <div class="tab-pane fade" id="pills-power" role="tabpanel" aria-labelledby="pills-power-tab">
                    {
                        dataRanking.map(item => (
                            <ListBuild  key={item.id} periferico={item}></ListBuild>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}
export default TabsComponents;