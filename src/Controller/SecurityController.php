<?php

namespace App\Controller;

use App\Form\LoginType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
    #[Route('/connexion', name: 'app_connexion')]
    public function login(): Response
    {
        $formView = $this->createForm(LoginType::class);

        return $this->render('security/connexion.html.twig', [
            'formView' => $formView->createView()
        ]);
    }
}
