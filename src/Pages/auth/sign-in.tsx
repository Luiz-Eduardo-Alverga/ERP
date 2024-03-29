import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'

const signInForm = z.object({
  email: z.string().email(),
  password: z.string(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        description: 'Login realizado com sucesso',
      })
    } catch {
      toast({
        variant: 'destructive',
        title: 'Algo deu errado',
        description: 'Houve um problema ao fazer login',
      })
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className=" flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-700">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
              <Input id="password" type="password" {...register('password')} />
            </div>

            <Button
              className="w-full bg-violet-800 hover:bg-violet-950"
              disabled={isSubmitting}
            >
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
