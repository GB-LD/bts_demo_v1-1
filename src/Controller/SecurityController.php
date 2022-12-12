<?php

namespace App\Controller;

use App\Form\LoginType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{

    #[Route('/connexion', name: 'app_connexion')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        $formView = $this->createForm(LoginType::class);

        return $this->render('security/connexion.html.twig', [
            'formView' => $formView->createView(),
            'error' => $authenticationUtils->getLastAuthenticationError()
        ]);
    }

    #[Route('/logout', name: 'app_logout')]
    public function logout(): Response
    {
        throw new \Exception('logout() should never be reached');
    }
}
