const NODE_ENV = String(import.meta.env.NODE_ENV)
const IS_PRODUCTION = NODE_ENV === 'production'

export const clientEnv = {
    API_BASE_URL: IS_PRODUCTION ? '/api' : 'https://origami-team.site/api'
}