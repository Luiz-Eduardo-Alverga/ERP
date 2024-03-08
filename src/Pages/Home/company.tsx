import { Helmet } from 'react-helmet-async'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Search } from 'lucide-react';


export function Company()  {
  return (
   
<div className='items-center justify-center'>
  <Helmet title='Company'/>
  <form className='w-full shadow-md py-1 px-2 mb-2'><Button className='bg-white text-secondary-foreground  px-5 py-2  
     text-left'>EMPRESA</Button></form>  
  
  <form className=' w-5/7 shadow-md  p-5 mx-auto'>
      <div className='space-x-2'>
        <Button className='mb-8 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-5 py-2  
     text-left'>DADOS CADASTRAIS</Button>
      <Button className='mb-8 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-5 py-2
     text-left'>CERTIFICADO</Button>
      <Button className='mb-8 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-5 py-2
     text-left'>LOGO</Button>
      <Button className='mb-8 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-5 py-2
     text-left'>DISPOSITVOS</Button>
      <Button className='mb-8 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-5 py-2
     text-left'>CONFIGURAÇÕES</Button>
     </div>
    
    <div className='flex mb-4  space-x-5'>
          <div >
            <Label className='items-left' htmlFor='cpf'>CPF/CNPJ</Label>
            <Input className='h-8 w-full lg:w-60 m-0 ' type='text' id='cpf' ></Input>
            </div>
            <div >
            <Label className=' items-left' htmlFor='ie'>INSCRIÇÃO ESTADUAL</Label>
            <Input className='h-8 w-full lg:w-60 m-0 ' type='number' id='ie' ></Input>
            </div>
            <div >
            <Label className='items-left' htmlFor='ie'>INSCRIÇÃO MUNICIPAL</Label>
            <Input className='h-8 w-full lg:w-60 m-0 ' type='number' id='ie' ></Input>
            </div>
            <div >
            <Label className='items-left' htmlFor='unidade'>UNIDADE</Label>
            <Input className='h-8 w-full lg:w-60 m-0 ' type='text' id='unidade' ></Input>
            </div>
    </div>
    
    <div className='flex mb-4  space-x-5'>
          <div className='w-1/2'>
            <Label className='items-left' htmlFor='nomeF'>NOME DE FANTASIA</Label>
            <Input className='h-8 w-full lg:w-106 m-0 ' type='text' id='nomeF' ></Input>
            </div>
            <div className='w-1/2'>
            <Label className=' items-left' htmlFor='nomeR'>RAZÃO SOCIAL</Label>
            <Input className='h-8 lg:w-106' type='text' id='nomeR' ></Input>
            </div>
    </div>
        
        
    <div className='flex mb-4 space-x-5'>
          
    <div className='w-1/7 '>
      <Label className='items-left' htmlFor='cep'>CEP</Label>
        <div className='mx-1 h-8 flex w-[95%] items-center gap-1 rounded-md border border-zinc-150 px-3 py-1 shadow-sm">'>
        <Search className="h-5 w-5 m-0 text-zinc-500 " />
        <Input className=' h-8 w-full lg:w-32 m-0 bg-transparent border-0 ' type='text' id='cep' placeholder="CEP..."></Input>
        </div>
     </div>
    <div className='w-3/4'>
        <Label className='items-left' htmlFor='endereço'>ENDEREÇO</Label>
        <Input className=' h-8 w-full lg:w-124 m-0 ' type='text' id='endereço'></Input>
        </div>
        <div className='w-1/7'>
        <Label className='items-left' htmlFor='numero'>NÚMERO</Label>
        <Input className=' h-8 w-full lg:w-32 m-0 ' type='text' id='numero'></Input>
        </div>
  </div>
  
  <div className='flex mb-4 space-x-5'>
          
    <div className='w-3/6'>
      <Label className='items-left' htmlFor='complemento'>COMPLEMENTO</Label>
      <Input className=' h-8 w-full lg:w-68 m-0 ' type='text' id='complemento' ></Input>
        
     </div>
    <div >
        <Label className='items-left' htmlFor='bairro'>BAIRRO</Label>
        <Input className=' h-8 w-full lg:w-60 m-0 ' type='text' id='bairro'></Input>
        </div>
        <div >
        <Label className='items-left' htmlFor='cidade'>CIDADE</Label>
        <Input className=' h-8 w-full lg:w-60 m-0 ' type='text' id='cidade'></Input>
        </div>
  </div>

  <div className='flex mb-4 space-x-5'>
          
          <div className='w-1/7'>
            <Label className='items-left' htmlFor='DDD'>DDD</Label>
            <Input className=' h-8 w-full lg:w-12 m-0 ' type='text' id='DDD' ></Input>
              
           </div>
          <div className='w-2/7'>
              <Label className='items-left' htmlFor='telefone'>TELEFONE</Label>
              <Input className=' h-8 w-full lg:w-42 m-0 ' type='text' id='telefone'></Input>
              </div>
              <div className='w-1/2'>
              <Label className='items-left' htmlFor='email'>EMAIL</Label>
              <Input className=' h-8 w-full lg:w-78 m-0 ' type='email' id='email'></Input>
              </div>
              <div className='w-1/2'>
              <Label className='items-left' htmlFor='regime'>REGIME TRIBUTÁRIO</Label>
              <Input className=' h-8 w-full lg:w-78 m-0 ' type='text' id='regime'></Input>
              </div>
        </div>
      
      
      
      
      



  </form>
        
  </div>
  )
}
